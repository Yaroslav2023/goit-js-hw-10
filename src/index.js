
import { fetchBreeds } from "./cat-api";


const selectEl = document.querySelector('.breed-select')

// const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
// const API_KEY = 'live_MsuspCDcKIxxbH4VLrjhx8kNUGJ3Tvid4KTY7V2POZdHhqXRTw4cAbG9e0qbawVd';
creatSelectOptions ();

function creatSelectOptions () {
    fetchBreeds().then((breeds) => renderOptions(breeds));
}

function renderOptions(breeds) {
    const markup = breeds.map(({ id, name }) => {
      return `<option value = ${id}>${name}</option>`
    })
    .join("");
    selectEl.insertAdjacentHTML('beforeend', markup);
}
