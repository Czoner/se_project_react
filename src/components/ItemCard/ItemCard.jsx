import React from "react";
import { CurrentUserContent } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, isLoggedIn }) => {
  const currentUser = React.useContext(CurrentUserContent);
  const imageCard = item.imageUrl;

  const isLiked = item.likes.some((id) => id === currentUser._id);
  const likedButtonClassName = `card_like-button ${
    isLiked ? "card_like-button_active" : "card_like-button_hidden"
  }`;

  const handleLike = (item) => {
    onCardLike(item._id, isLiked);
  };
  const onClick = () => {
    onSelectCard(item);
  };

  console.log(isLoggedIn);
  return (
    <div className="card_list">
      <img
        src={imageCard}
        className="card_image"
        onClick={onClick}
        alt={item.name}
      />
      <div className="card_info">
        <div className="card_name">{item.name}</div>
        {isLoggedIn ? (
          <>
            <button
              className={`${likedButtonClassName}`}
              type="button"
              aria-label="Like"
              onClick={() => {
                handleLike(item);
              }}
            ></button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
