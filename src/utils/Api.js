class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  updateUserInfo(newUserInfo) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: newUserInfo.name,
        about: newUserInfo.about,
      }),
    }).then(this._handleResponse);
  }

  updateUserAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatar.url }),
    }).then(this._handleResponse);
  }

  addNewCard(newCard) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // Отобразить количество лайков
  setCardLike(id) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  dislikeCard(id) {
    return fetch(`${this._url}cards/likes/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const apiOptions = {
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-34/",
  headers: {
    authorization: "bafafc62-4fb6-453f-87fa-68e5b80e5c31",
    "Content-Type": "application/json",
  },
};

export const api = new Api(apiOptions);
