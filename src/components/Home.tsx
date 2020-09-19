import React, { useEffect, useState } from "react";
import { getRandomBeer } from "../API";

import { Wrapper, Banner, BottomHomeWrapper, BeerImg } from "./styles";

import defaultImg from '../assets/images/no-image-size740x480.jpg';

const Home = () => {
  const [beer, setBeer] = useState<any>(null);

  const test: String = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg';

  useEffect(() => {
    getRandomBeer()
      .then((data) => {
        console.log(data.data.data);
        setBeer(data.data.data);
    })
      .catch((err) => console.log(err));
  }, []);
return (beer && 
<Wrapper>
  <Banner>
    {beer.nameDisplay}
  </Banner>
  <BottomHomeWrapper>
    <Banner>
      <BeerImg imagey={beer.hasLabel ? test : null}></BeerImg>
    </Banner>
    <Banner>{beer.abv} %</Banner>
  </BottomHomeWrapper>
</Wrapper>);
};

export default Home;
