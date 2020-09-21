import React, { useEffect, useState } from "react";
import { getRandomBeer, getBeerbyID } from "../API";
import { Link } from "react-router-dom";

import { RandomBeer, BeerInterface, Labels } from "../interfaces";

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

  const [beer, setBeer] = useState<RandomBeer | BeerInterface | null>(null);
  // const [beer, setBeer] = useState<any>(null);
  // const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    // generateRandomBeer();
    const currBeer = sessionStorage.getItem("beer");
    const currLabel = sessionStorage.getItem("beerLabel");
    if(currBeer) setBeer(JSON.parse(currBeer));
    // if(currLabel) setLabel(currLabel);
  }, []);

  const generateRandomBeer = () => {
    getRandomBeer()
      .then((rdmBeer: RandomBeer) => {
        setBeer(rdmBeer);
        sessionStorage.setItem("beer", JSON.stringify(rdmBeer));
        getBeerbyID(rdmBeer.id)
          .then((beerById: BeerInterface) => {
            console.log(">beerByID ", beerById);
            setBeer(beerById);
            // setLabel(beerById.labels.large);
            sessionStorage.setItem("beerLabel", beerById.labels.large)
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
          {
            beer && (
              <Label beerimage={beer.labels ? beer.labels.large : null} />
            )
          }
        </LabelWrapper>
        <StatsWrapper>
          {beer && (
            <Stats>
              <StatsText>ABV: {beer.abv} %</StatsText>
              {/* <StatsText>{beer.description}</StatsText> */}
              <Link to={{
                pathname: "/details",
                state: {beer} 
                }}>Get details</Link>
            </Stats>
          )} 
        </StatsWrapper>
      </BottomHomeWrapper>
    </Wrapper>);
};

export default Home;
