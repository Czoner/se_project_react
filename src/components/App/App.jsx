import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.jsx";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import RegisterModal from "../ModalWithForm/RegisterModal.jsx";
import {
  deleteItems,
  getItems,
  postItems,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import Profile from "../Profile/Profile.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import * as auth from "../../utils/Auth/auth.js";
import SignInModal from "../ModalWithForm/SignInModal.jsx";
import { setToken, getToken, removeToken } from "../../utils/token.js";
import { CurrentUserContent } from "../../contexts/CurrentUserContext.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal.jsx";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [weatherType, setWeatherType] = useState("");
  const [days, isDay] = useState(true);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleEditProfileModal = () => {
    setActiveModal("editProfile");
  };

  const handleSignUpModal = () => {
    setActiveModal("signUp");
  };

  const handleSingInModal = () => {
    setActiveModal("signIn");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  // Handle esc key to close modals
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  // -------------------------------------

  const handleDeleteModal = () => {
    setActiveModal("delete");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (card) => {
    const token = getToken();
    const makeRequest = () => {
      return deleteItems(card._id, token).then(() => {
        const itemList = clothingItems.filter((item) => {
          return item._id !== card._id;
        });
        setClothingItems(itemList);
      });
    };
    handleSubmit(makeRequest);
  };

  //Singing in and out from the modals
  const handleSignUp = ({ name, avatar, email, password }) => {
    function makeRequest() {
      auth.signUp({ name, avatar, email, password }).then(() => {
        setIsLoggedIn(true);
        setUserData({ name, avatar, email, password });
        navigate("/profile");
      });
    }
    handleSubmit(makeRequest);
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .signIn(email, password)
      .then((res) => {
        if (res.token) {
          auth
            .getUser(res.token)
            .then((data) => {
              setIsLoggedIn(true);
              setUserData(data);
              navigate("/profile");
            })
            .catch((err) => {
              console.error(err);
            });
          setToken(res.token);
          handleCloseModal();
        }
      })
      .catch((err) => {
        console.error(err);
        console.log("this is wrong ");
      });
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    removeToken();
    navigate("/");
  };

  // Handle Updating User Profile

  const handleUpdateUser = ({ name, avatar }) => {
    const token = getToken();
    function makeRequest() {
      return auth.updateUser({ name, avatar }, token).then((res) => {
        setUserData(res.user);
      });
    }
    handleSubmit(makeRequest);
  };

  // Handle card LIKES

  const handleCardLike = (id, isLiked) => {
    const token = getToken();
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) => {
              return cards.map((item) =>
                item._id === id ? updatedCard.data : item
              );
            });
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard.data : item))
            );
          })
          .catch(console.error);
  };

  const onAddItem = (values) => {
    const token = getToken();
    const makeRequest = () => {
      return postItems(values, token).then((res) => {
        setClothingItems([res.data, ...clothingItems]);
      });
    };
    handleSubmit(makeRequest);
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleCloseModal)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    const jwt = getToken();

    getForecastWeather()
      .then((data) => {
        const tempature = parseWeatherData(data);
        const date = new Date();
        setWeatherType(data.weather[0].main.toLowerCase());
        if (
          data?.sys.sunrise * 1000 < date.getTime() &&
          data?.sys.sunset * 1000 > date.getTime()
        ) {
          isDay(true);
        } else {
          isDay(false);
        }
        setTemp(tempature);
        getItems().then((res) => {
          setClothingItems(res);
        });
      })
      .catch((err) => {
        console.error(err);
      });

    if (!jwt) {
      return;
    }
    auth
      .getUser(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setUserData(data);
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContent.Provider value={userData}>
        <Header
          onCreateModal={handleCreateModal}
          onSignUpModal={handleSignUpModal}
          onSignInModal={handleSingInModal}
          name={userData.name}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                weatherTemp={temp}
                weatherType={weatherType}
                onSelectCard={handleSelectedCard}
                day={days}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path="/profile"
              element={
                <Profile
                  onSelectCard={handleSelectedCard}
                  clothingItems={clothingItems}
                  onCreateModal={handleCreateModal}
                  name={userData.name}
                  avatar={userData.avatar}
                  onEditProfileModal={handleEditProfileModal}
                  onCardLike={handleCardLike}
                  handleLogOut={handleLogOut}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Route>
        </Routes>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
            isLoading={isLoading}
          />
        )}
        {activeModal === "editProfile" && (
          <EditProfileModal
            handleCloseModal={handleCloseModal}
            handleUpdateUser={handleUpdateUser}
            isOpen={activeModal === "editProfile"}
            isLoading={isLoading}
          />
        )}
        {activeModal === "signUp" && (
          <RegisterModal
            handleCloseModal={handleCloseModal}
            handleSingInModal={handleSingInModal}
            handleSignUp={handleSignUp}
            isOpen={activeModal === "signUp"}
          />
        )}
        {activeModal === "signIn" && (
          <SignInModal
            handleCloseModal={handleCloseModal}
            handleSignUpModal={handleSignUpModal}
            handleSignIn={handleSignIn}
            isOpen={activeModal === "signIn"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            handleCloseModal={handleCloseModal}
            deleteConfirmModal={handleDeleteModal}
            isLoggedIn={isLoggedIn}
          />
        )}
        {activeModal === "delete" && (
          <ConfirmDeleteModal
            onClose={handleCloseModal}
            handleDeleteCard={() => {
              handleDeleteCard(selectedCard);
            }}
            itemModal={() => {
              handleSelectedCard(selectedCard);
            }}
          />
        )}
      </CurrentUserContent.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
