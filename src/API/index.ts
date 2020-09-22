import axios, { AxiosResponse } from "axios";

const getRandomBeer = async () => {
  console.log(">getRandomBeer executing..");
  try {
    const res: AxiosResponse = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?hasLabels=Y&withBreweries=Y&key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(">getRandomBeer response:");
    // console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

const getBeerbyID = async (id: string) => {
  console.log(">getBeerByID executing..");
  try {
    const res = await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${id}/?key=${process.env.REACT_APP_API_KEY}`
      );
    console.log(">getBeerByID response:");
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

const getBreweryByBeer = async (id: string) => {
  console.log(">getBreweryByBeer executing..");
  try {
    const res = await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${id}/breweries/?key=${process.env.REACT_APP_API_KEY}`
      );
    console.log(">getBreweryByBeer response:");
    return res.data.data[0];
    // return res.data.data;
  } catch (err) {
    throw err;
  }
};

const getBreweryByID = async (id: string) => {
  console.log(">getBreweryByID executing..");
  try {
    const res = await axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/brewery/${id}/?key=${process.env.REACT_APP_API_KEY}`
      );
    console.log(">getBreweryByID response:");
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    throw err;
  }
};

export { getRandomBeer, getBeerbyID, getBreweryByBeer, getBreweryByID };
