import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import { getBreweryByID } from "../API";

import { RandomBeer, BreweryInterface } from "../interfaces";

import {
  Wrapper,
  Banner,
  BannerText,
  BottomHomeWrapper,
  LabelWrapper,
  Label, Button,
  InfoWrapper,
  Info,
  InfoText
} from "./styles";

interface Props {
  location: {
    state: {
      beer: RandomBeer;
      breweryid: string;
    }
  };
}

const Details = ({ location: { state: { beer, breweryid } } }: Props) => {
  const [brewery, setBrewery] = useState<BreweryInterface | null>(null);

  let history = useHistory();

  const getBreweryDetails = async () => {
    try {
      console.log(`>Brewery ID: ${breweryid}`);
      const res: BreweryInterface = await getBreweryByID(breweryid);
      setBrewery(res);
      sessionStorage.setItem("brewery", JSON.stringify(res));
    } catch (error) {
      console.log(error);
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
      <Banner>
        <BannerText>{beer.name}</BannerText>
        <Button onClick={() => history.push("/")}>Go back</Button>
      </Banner>
    </Wrapper>
  )
}

export default Details

