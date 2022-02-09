import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUser(userData);
        setCards(initialCards);
      })
      .catch(() => {
        (error) => console.log(error);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <div className="profile__avatar-overlay">
            <img
              src={user.avatar}
              alt="Аватар пользователя"
              className="profile__avatar"
            />
            <button
              onClick={onEditAvatar}
              className="profile__avatar-change"
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit"
          ></button>
          <h1 className="profile__name">{user.name}</h1>
          <p className="profile__about">{user.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add"
        ></button>
      </section>

      <section className="places">
        <ul className="cards">
          {cards.map((card) => (
            <Card onCardClick={onCardClick} key={card._id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
