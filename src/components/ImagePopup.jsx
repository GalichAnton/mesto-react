import React from "react";

const ImagePopup = ({ card, onClose }) => {
  return (
    <div
      onClick={onClose}
      className={`popup photo ${card?.name && "popup_opened"}`} // без знака вопроса выдает ошибку при закрытии так как прередается null у которого нет name
      id="image-popup"
    >
      <figure onClick={(e) => e.stopPropagation()} className="photo__figure">
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
        ></button>
        <img className="photo__img" src={card && card.link} alt="" />
        <figcaption className="photo__caption">{card && card.name}</figcaption>
      </figure>
    </div>
  );
};

export default ImagePopup;
