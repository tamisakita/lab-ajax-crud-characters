class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
  }

  getOneRegister() {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => err);
  }

  createOneRegister(newCharacterInfo) {
    axios
      .post(`${this.BASE_URL}/characters`, newCharacterInfo)
      .then(response => {
        console.log(response);
      })
      .catch(err => err);
  }

  updateOneRegister(updatedfCharacter) {
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, updatedfCharacter)
      .then(response => {
        console.log(respose);
      })
      .catch(err => err);
  }

  deleteOneRegister () {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
  }
}
