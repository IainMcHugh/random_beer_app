import React, { useEffect, useState } from "react";
import { getRandomBeer, getBeerbyID } from "../API";

import { Wrapper, Banner, BottomHomeWrapper, BeerImg } from "./styles";

import defaultImg from '../assets/images/no-image-size740x480.jpg';

const Home = () => {
  const [beer, setBeer] = useState<any>(null);
  const [beerImg, setBeerImg] = useState<string>("");

  const test: String = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';

  useEffect(() => {
    getRandomBeer()
      .then((data) => {
        console.log(data.data.data);
        setBeer(data.data.data);

        getBeerbyID(data.data.data.id)
        .then((data2) => {
          console.log(data2.data.data.labels)
          setBeerImg(data2.data.data.labels.icon)
        })
        .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));
  }, []);
  return (beerImg &&
    <Wrapper>
      <Banner>
        {beer.nameDisplay}
      </Banner>
      <BottomHomeWrapper>
        <Banner>
          <BeerImg imagey={beer.hasLabel ? test : test}></BeerImg>
        </Banner>
        <Banner>{beer.abv} %</Banner>
      </BottomHomeWrapper>
    </Wrapper>);
};

export default Home;
