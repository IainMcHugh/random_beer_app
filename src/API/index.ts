import axios from "axios";

const getRandomBeer = () => {
    console.log(">getRandomBeer executing..");
    return axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?hasLabels=Y&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        // console.log(res);
        return res.data.data;
      })
      .catch((err) => {
        throw err;
      });
  };

const getBeerbyID = (id: string) => {
    console.log(">getBeerByID executing..");
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/${id}/?key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      console.log(res.data.data);
      return res.data.data;
    })
    .catch((err) => {
      return err;
    });
};

export { getRandomBeer, getBeerbyID };
