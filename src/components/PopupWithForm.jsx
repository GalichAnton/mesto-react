import React from "react";

const PopupWithForm = ({
  title,
  name,
  children,
  isOpen,
  onClose,
  buttonText = "Сохранить",
}) => {
  return (
    <div
      onClick={onClose}
      className={`popup ${isOpen ? "popup_opened" : "popup_closed"}`}
      id="user-popup"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          name
            ? `popup__container popup__container_type_${name}`
            : "popup__container"
        }
      >
        <button
          onClick={onClose}
          type="button"
          className="popup__close"
        ></button>
        <form className="popup__form" id="user-form" name={name} noValidate="">
          <fieldset className="popup__input-container">
            <legend className="popup__heading">{title}</legend>
            {children}
            <button type="submit" className="popup__submit">
              {buttonText}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
