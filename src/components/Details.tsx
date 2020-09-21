import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";

import { RandomBeer } from "../interfaces";

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

interface Props {
  location: {
    state: {
      beer: RandomBeer;
    }
  };
}

const Details = ({ location }: Props) => {
  const [label, setLabel] = useState<string | null>("");
  let history = useHistory();

  useEffect(() => {
    console.log(">Details Page..");
    setLabel(localStorage.getItem("beerLabel"));
  }, [])

  return (
    <Wrapper>
      <BottomHomeWrapper>
        <LabelWrapper>
          <Label beerimage={label ? label : null} />
        </LabelWrapper>
      </BottomHomeWrapper>
      <Banner>
        <BannerText>{location.state.beer.name}</BannerText>
      </Banner>
      <BottomHomeWrapper>
        <Button onClick={() => history.push("/")}>Go back!</Button>
      </BottomHomeWrapper>
    </Wrapper>
  )
}

export default Details

