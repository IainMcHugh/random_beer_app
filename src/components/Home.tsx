import React, { useEffect, useState } from "react";
import { getRandomBeer, getBeerbyID, getBreweryByBeer } from "../API";
import { Link } from "react-router-dom";

import { RandomBeer, BeerInterface, BreweryShortInterface } from "../interfaces";

import {
  Wrapper,
  Banner,
  BannerText,
  BottomHomeWrapper,
  LabelWrapper,
  Label, Button,
  InfoWrapper,
  Info,
  InfoText,
  LinkWrapper,
  ErrorWrapper,
  ErrorItem
} from "./styles";


const Home = () => {

  const [beer, setBeer] = useState<RandomBeer | BeerInterface | null>(null);
  const [brewery, setBrewery] = useState<BreweryShortInterface | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const currBeer = sessionStorage.getItem("beer");
    const currBrewery = sessionStorage.getItem("brewery");
    if (currBeer) setBeer(JSON.parse(currBeer));
    else generateRandomBeer();
    if (currBrewery) setBrewery(JSON.parse(currBrewery));
  }, []);

  const generateRandomBeer = async () => {
    // clear sessionStorage
    sessionStorage.clear();
    try {
      const rdmBeer: RandomBeer = await getRandomBeer();
      setBeer(rdmBeer);
      const beerById: BeerInterface = await getBeerbyID(rdmBeer.id);
      setBeer(beerById);
      sessionStorage.setItem("beer", JSON.stringify(beerById));
      const breweryByBeer: BreweryShortInterface = await getBreweryByBeer(rdmBeer.id);
      console.log(breweryByBeer);
      setBrewery(breweryByBeer);
    } catch (err) {
      console.log(`>generateRandomBeer Error: ${err}`);
      setError(err);
      setTimeout(() => {
        setError(null);
      }, 3000)
    }
  }

  return (
    <Wrapper>
      <Banner>
        <BannerText>Random Beer Generator</BannerText>
        <Button onClick={() => generateRandomBeer()}>Random Beer!</Button>
      </Banner>
      {beer && (
        <BottomHomeWrapper>
          <LabelWrapper>
            <Label beerimage={beer.labels ? beer.labels.large : null} />
          </LabelWrapper>
          <InfoWrapper>
            <InfoText infotype="title">{beer.nameDisplay}</InfoText>
            <InfoText infotype="description">{beer.style.description}</InfoText>
            {brewery &&
              <LinkWrapper>
                <Link to={{
                  pathname: "/details",
                  state: { beer, breweryid: brewery.id }
                }}> {brewery.name}
                </Link>
              </LinkWrapper>}
          </InfoWrapper>
        </BottomHomeWrapper>
      )}
      {error && <ErrorWrapper>
        <ErrorItem>{error.message}</ErrorItem>
      </ErrorWrapper>}
    </Wrapper>);
};

export default Home;
