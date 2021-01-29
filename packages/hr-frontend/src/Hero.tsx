import React from "react";
import LazyHero from "react-lazy-hero";
import { Button, Grid, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useDispatch } from "react-redux";

import { actions as navigationActions } from "./navigation/redux/model";
import { compose, Func0 } from "redux";

const bgUrl = process.env.PUBLIC_URL + "/Rocket-Background-Free-Picture.jpeg";

const HeroContainer = () => {
  const dispatch = useDispatch();

  const toSearch = compose(dispatch, navigationActions.toSearch);


  return <Hero toSearch={toSearch} />;
};

interface IHero {
  toSearch: Func0<{
    type: "TO_SEARCH_ROCKETS";
    payload: {};
  }>;
}

const Hero: React.FC<IHero> = ({ toSearch }: IHero) => {
  return (
    <LazyHero
      imageSrc={bgUrl}
      parallaxOffset={250}
      minHeight="70vh"
      opacity={0.2}
      color="white"
    >
      <Grid
        container
        id="id1"
        direction="row"
        justify="center"
        style={{ width: "80vw" }}
      >
        <Grid item /* justify="flex-start"  */xs={3} style={{ textAlign: "start" }}>
          <Typography variant="h2">Achieve liftoff.</Typography>
          <Button variant="contained" color="secondary" onClick={() => {toSearch()}}>
            View rockets <ChevronRightIcon />
          </Button>
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    </LazyHero>
  );
};

export default HeroContainer;
