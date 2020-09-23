import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { getBreweryByID } from "../API";

import { BeerInterface, BreweryInterface } from "../interfaces";

import {
  Wrapper,
  Banner,
  BannerText,
  BottomHomeWrapper,
  LabelWrapper,
  Label, 
  Button,
  InfoWrapper,
  InfoText,
  ErrorWrapper,
  ErrorItem
} from "./styles";

interface Props {
  location: {
    state: {
      beer: BeerInterface;
      breweryid: string;
    }
  };
}

const Details = ({ location: { state: { beer, breweryid } } }: Props) => {
  const [brewery, setBrewery] = useState<BreweryInterface | null>(null);
  const [error, setError] = useState<Error | null>(null);
  let history = useHistory();

  const getBreweryDetails = async () => {
    try {
      console.log(`>Brewery ID: ${breweryid}`);
      const res: BreweryInterface = await getBreweryByID(breweryid);
      setBrewery(res);
      sessionStorage.setItem("brewery", JSON.stringify(res));
    } catch (error) {
      console.log(error);
      setError(error);
      setTimeout(()=> {
        setError(null);
      }, 3000);
    }
  }

  useEffect(() => {
    // check session storage first
    const currBrewery = sessionStorage.getItem("brewery");
    if (currBrewery) setBrewery(JSON.parse(currBrewery));
    else getBreweryDetails();
  }, [])

  return (
    <Wrapper>
      <Banner>
        <BannerText>{beer.name}</BannerText>
        <Button onClick={() => history.push("/")}>Go back</Button>
      </Banner>
      {brewery && (
        <BottomHomeWrapper>
          <LabelWrapper>
            <Label beerimage={brewery.images ? brewery.images.squareLarge : null} />
          </LabelWrapper>
          <InfoWrapper>
            <InfoText infotype="title">{brewery.name}</InfoText>
            <InfoText infotype="description">{brewery.description}</InfoText>
            <InfoText infotype="description">Established - {brewery.established}</InfoText>
          </InfoWrapper>
        </BottomHomeWrapper>
      )}
      
      {error && <ErrorWrapper>
        <ErrorItem>{error.message}</ErrorItem>
      </ErrorWrapper>}
    </Wrapper>
  )
}

export default Details

