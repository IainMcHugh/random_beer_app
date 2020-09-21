import React, { useEffect, useState } from "react";
import { getRandomBeer, getBeerbyID } from "../API";
import { Link } from "react-router-dom";

import { RandomBeer, Labels } from "../interfaces";

import {
  Wrapper,
  Banner,
  BannerText,
  BottomHomeWrapper,
  LabelWrapper,
  Label, Button,
  StatsWrapper,
  Stats,
  StatsText
} from "./styles";



const Home = () => {

  const [beer, setBeer] = useState<RandomBeer | null>(null);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    // generateRandomBeer();
    const currBeer = localStorage.getItem("beer");
    const currLabel = localStorage.getItem("beerLabel");
    if(currBeer) setBeer(JSON.parse(currBeer));
    if(currLabel) setLabel(currLabel);
  }, []);

  const generateRandomBeer = () => {
    getRandomBeer()
      .then((rdmBeer: RandomBeer) => {
        setBeer(rdmBeer);
        localStorage.setItem("beer", JSON.stringify(rdmBeer));
        getBeerbyID(rdmBeer.id)
          .then((beerById: any) => {
            console.log(">Beer Labels: ", beerById.labels);
            setLabel(beerById.labels.large);
            localStorage.setItem("beerLabel", beerById.labels.large)
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err));
  }

  return (
    <Wrapper>
      <Banner>
        <BannerText>{beer && beer.nameDisplay}</BannerText>
        <Button onClick={() => generateRandomBeer()}>Random Beer!</Button>
      </Banner>
      <BottomHomeWrapper>
        <LabelWrapper>
          <Label beerimage={label ? label : null} />
        </LabelWrapper>
        <StatsWrapper>
          {beer && (
            <Stats>
              <StatsText>ABV: {beer.abv} %</StatsText>
              <StatsText>IBU: {beer.ibu} %</StatsText>
              <Link to={{
                pathname: "/details",
                state: {beer: beer} 
                }}>Get details</Link>
            </Stats>
          )} 
        </StatsWrapper>
      </BottomHomeWrapper>
    </Wrapper>);
};

export default Home;
