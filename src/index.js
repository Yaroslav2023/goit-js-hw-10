
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select'


const selectEl = document.querySelector('.breed-select');
const catEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

errorHidden();
selectHidden();
creatSelectOptions ();

function creatSelectOptions () {
    fetchBreeds().then((breeds) => {renderOptions(breeds);
    loaderHidden();
    selectNotHidden();
});
}

function renderOptions(breeds) {
    const markup = breeds.map(({ id, name }) => {
      return `<option value = ${id}>${name}</option>`
    })
    .join("");
    selectEl.insertAdjacentHTML('beforeend', markup);
}

selectEl.addEventListener('change', onBreedSelect);

function onBreedSelect () {
  clearCatInfo();
  loaaderNotHidden();
  let breedId = selectEl.value;
  fetchCatByBreed(breedId).then((objCat) => {renderArticle(objCat);
    loaderHidden();});
}

function renderArticle(objCat) {
  const markupBreedDescr = objCat.map(({url, breeds }) => {
    return `<img src="${url}" alt="" width="600px">
    <div><h2>${breeds[0].name}</h2>
    <p>${breeds[0].description}</p>
    <p>Temperament: ${breeds[0].temperament}</p></div>
  `
})
catEl.insertAdjacentHTML('beforeend', markupBreedDescr);

}

function clearCatInfo() {
  catEl.innerHTML = '';
}

function loaderHidden() {
  loaderEl.classList.add('visually-hidden');
}

function loaaderNotHidden() {
  loaderEl.classList.remove('visually-hidden');
}

function errorHidden() {
  errorEl.classList.add('visually-hidden');
}

function selectHidden() {
  selectEl.classList.add('visually-hidden');
}

function selectNotHidden() {
  selectEl.classList.remove('visually-hidden');
}

