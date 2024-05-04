import Header from "../Header/Header";
import "./App.css";
import "../Footer/Footer.css";
import Main from "../Main/main.jsx";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import CurrentTempatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
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
import * as auth from "../Auth/auth.js";
import SignInModal from "../ModalWithForm/SignInModal.jsx";
import { setToken, getToken } from "../../utils/token.js";
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
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [currentUser, setCurrentUser] = useState({ name: "" });

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
    deleteItems(card._id, token)
      .then(() => {
        const itemList = clothingItems.filter((item) => {
          return item._id !== card._id;
        });
        setClothingItems(itemList);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //Singing in and out from the modals
  const handleSignUp = ({ name, avatar, email, password }) => {
    auth
      .signUp({ name, avatar, email, password })
      .then(() => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, password });
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleSignIn = ({ email, password }) => {
    if (!email || !password) {
      return;
    }

    auth
      .signIn(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          setUserData(res.user);
          setIsLoggedIn(true);
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.error(err);
        console.log("this is wrong ");
      });
  };

  // Handle Updating User Profile

  const handleUpdateUser = ({ name, avatar }) => {
    const token = getToken();
    auth
      .updateUser({ name, avatar }, token)
      .then((res) => {
        setUserData(res.user);
      })
      .catch((err) => {
        console.error(err);
      });
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
          .catch((err) => console.log(err));
  };

  const onAddItem = (values) => {
    const token = getToken();
    setIsLoading(true);
    postItems(values, token)
      .then((res) => {
        console.log(res);
        setClothingItems([res.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }

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
    <CurrentTempatureUnitContext.Provider
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
            handleSignUp={handleSignUp}
            isOpen={activeModal === "signUp"}
          />
        )}
        {activeModal === "signIn" && (
          <SignInModal
            handleCloseModal={handleCloseModal}
            handleSignIn={handleSignIn}
            isOpen={activeModal === "signIn"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            handleCloseModal={handleCloseModal}
            deleteConfirmModal={handleDeleteModal}
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
    </CurrentTempatureUnitContext.Provider>
  );
}

export default App;
