const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY = 'live_MsuspCDcKIxxbH4VLrjhx8kNUGJ3Tvid4KTY7V2POZdHhqXRTw4cAbG9e0qbawVd';

const fetchBreeds = () => {
    return fetch(`${BASE_URL}breeds?api_key=${API_KEY}`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        };
        return response.json();})
}

const fetchCatByBreed = (breedId) => {
    return fetch(`${BASE_URL}images/search?breed_ids=${breedId}&limit=1&has_breeds=1&api_key=${API_KEY}`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        };
        return response.json();})
    
}

export { fetchBreeds, fetchCatByBreed }

// 