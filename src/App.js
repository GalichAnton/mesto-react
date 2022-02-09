import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import React, { useState } from "react";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };
  return (
    <div className="App">
      <div className="page">
        <div />
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          title={"Редактировать профиль"}
        >
          <label htmlFor="name" className="popup__field">
            <input
              className="popup__input"
              id="name"
              name="name"
              required
              placeholder="Имя"
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error" id="name-error"></span>
          </label>
          <label htmlFor="about" className="popup__field">
            <input
              className="popup__input"
              id="about"
              name="about"
              required
              placeholder="О себе"
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error" id="about-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          title={"Новое место"}
        >
          <label htmlFor="placeName" className="popup__field">
            <input
              className="popup__input"
              id="placeName"
              name="name"
              minLength="2"
              maxLength="40"
              required
              placeholder="Название"
            />
            <span className="popup__input-error" id="placeName-error"></span>
          </label>
          <label htmlFor="src" className="popup__field">
            <input
              className="popup__input"
              id="src"
              name="link"
              type="url"
              required
              placeholder="Ссылка на картинку"
            />
            <span className="popup__input-error" id="src-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          title={"Обновить аватар"}
          name={"avatar"}
        >
          <label htmlFor="url" className="popup__field">
            <input
              className="popup__input"
              id="url"
              name="url"
              placeholder="Ссылка на аватар"
              required
            />
            <span className="popup__input-error" id="url-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </div>
  );
};

export default App;
