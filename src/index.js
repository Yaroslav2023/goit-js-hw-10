
import { fetchBreeds, fetchCatByBreed } from "./cat-api";


const selectEl = document.querySelector('.breed-select')
const catEl = document.querySelector('.cat-info');

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

selectEl/addEventListener('change', onBreedSelect);

function onBreedSelect () {
  let breedId = selectEl.value;
  fetchCatByBreed(breedId).then((objCat) => renderArticle(objCat));
  
}

function renderArticle(objCat) {
  const markupBreedDescr = objCat.map(({url, breeds }) => {
    return `<img src="${url}" alt="" width="300px">
  <h2>${breeds[0].name}</h2>
  <p>${breeds[0].description}</p>
  <p>Temperament: ${breeds[0].temperament}</p>`
})
catEl.insertAdjacentHTML('beforeend', markupBreedDescr)
}

