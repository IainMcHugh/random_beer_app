import React, { useEffect, useState } from "react";
import { getRandomBeer, getBeerbyID } from "../API";

import { Wrapper, Banner, BannerText, BottomHomeWrapper, LabelWrapper, Label, Button, StatsWrapper } from "./styles";

interface RandomBeer {
  abv: string;
  createDate: string;
  id: string;
  isRetired: string;
  name: string;
  nameDisplay: string;
  status: string;
  statusDisplay: string;
  style: {},
  styleId: string;
  updateDate: string;
}

interface Labels {
  contentAwareIcon: string;
  contentAwareLarge: string;
  contentAwareMedium: string;
  icon: string;
  large: string;
  medium: string;
}

const Home = () => {

  const [beer, setBeer] = useState<RandomBeer | null>(null);
  const [labels, setLabels] = useState<Labels | null>(null);

  useEffect(() => {
    // generateRandomBeer();
  }, []);

  const generateRandomBeer = () => {
    getRandomBeer()
      .then((rdmBeer: RandomBeer) => {
        setBeer(rdmBeer);
        getBeerbyID(rdmBeer.id)
          .then((beerById: any) => {
            console.log(`>Beer Labels: ${beerById.labels}`)
            setLabels(beerById.labels);
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
          <Label beerimage={labels ? labels.large : null} />
        </LabelWrapper>
        <StatsWrapper>
          {beer && beer.abv} %
        </StatsWrapper>
      </BottomHomeWrapper>
    </Wrapper>);
};

export default Home;
