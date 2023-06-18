const fetchBreeds = () => {
    return fetch(`https://api.thecatapi.com/v1/breeds`).then((response) => {
        if(!response.ok) {
            throw new Error(response.status);
        };
        return response.json();})
    .catch(error => console.log(error));
}
export { fetchBreeds }