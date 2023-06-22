import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select'

const selectEl = document.querySelector('.breed-select');
const catEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader-text');
const errorEl = document.querySelector('.error');

errorHidden();
selectHidden();
creatSelectOptions ();

function creatSelectOptions () {
    fetchBreeds().then((breeds) => {renderOptions(breeds);
    loaderHidden();
    selectNotHidden();}).catch(error => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', 1000, selectError()));
  };



function renderOptions(data) {
    const markup = data.map(({ id, name }) => {
      return `<option value = ${id}>${name}</option>`
    })
    .join("");
    selectEl.insertAdjacentHTML('beforeend', markup);
   
};

selectEl.addEventListener('change', onBreedSelect);

function onBreedSelect () {
  clearCatInfo();
  loaaderNotHidden();
  let breedId = selectEl.value;
  fetchCatByBreed(breedId).then((objCat) => {renderArticle(objCat);
    loaderHidden(objCat);}).catch(error => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!', 1000));
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

function errorNotHidden() {
  errorEl.classList.remove('visually-hidden');
}

function selectHidden() {
  selectEl.classList.add('visually-hidden');
}

function selectNotHidden() {
  selectEl.classList.remove('visually-hidden');
}

function selectError() {
  selectEl.classList.add('visually-hidden');
  errorEl.classList.remove('visually-hidden');
  loaderEl.classList.add('visually-hidden');
}
