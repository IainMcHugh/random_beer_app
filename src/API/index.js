import axios from 'axios';

const getRandomBeer = () => {
    return axios.get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?key=${process.env.REACT_APP_API_KEY}`
    ).then(res => {return res})
    .catch(err => {return err});
}

export { getRandomBeer }