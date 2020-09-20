import axios from 'axios';

const getBeerbyID = (id: string) => {
    return axios.get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${id}/?key=${process.env.REACT_APP_API_KEY}`
    ).then(res => {return res})
    .catch(err => {return err});
}

const getRandomBeer = () => {
    return axios.get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?hasLabels=Y&key=${process.env.REACT_APP_API_KEY}`
    ).then(res => {return res})
    .catch(err => {return err});
}

export { getRandomBeer, getBeerbyID }