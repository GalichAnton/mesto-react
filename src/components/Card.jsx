import React from "react";

const Card = ({ card, onCardClick }) => {
  return (
    <div>
      <li className="card">
        <button type="button" className="card__delete"></button>
        <div className="card__container" onClick={() => onCardClick(card)}>
          <img
            src={card.link}
            className="card__photo"
            alt="Красивая карточка"
          />
        </div>
        <div className="card__descr">
          <h2 className="card__caption">{card.name}</h2>
          <div className="card__like-block">
            <button type="button" className="card__like button"></button>
            <span className="card__counter">{card.likes.length}</span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Card;
