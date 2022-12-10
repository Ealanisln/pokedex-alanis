import axios from 'axios';

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

pokeApi.get('/pokemon?limit=151')
    .then((response) => {
        console.log(response.data);
    }
);

export default pokeApi;