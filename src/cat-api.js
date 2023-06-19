const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY = 'live_MsuspCDcKIxxbH4VLrjhx8kNUGJ3Tvid4KTY7V2POZdHhqXRTw4cAbG9e0qbawVd';

const fetchBreeds = () => {
    return fetch(`${BASE_URL}breeds`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        };
        return response.json();})
    .catch(error => console.log(error));
}

const fetchCatByBreed = (breedId) => {
    return fetch(`${BASE_URL}images/search?limit=1&has_breeds=1&api_key=${API_KEY}&breed_ids=${breedId}`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        };
        return response.json();})
    .catch(error => console.log(error));

}

export { fetchBreeds, fetchCatByBreed }