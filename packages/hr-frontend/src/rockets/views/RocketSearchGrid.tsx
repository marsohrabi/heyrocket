import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import Header from "../../Header";
import RocketGrid from "../../components/RocketGrid";
import {
  RocketConnection,
} from "../redux/model";

const useStyles = makeStyles((theme) => ({
  searchIntroText: {
    padding: "30px 0",
    width: "90%",
    textAlign: "center",
    marginBottom: 25,
  },
  pageButtonsDiv: {
    padding: "20px 0",
  },
  pageButton: {
    width: "20%",
    margin: 10,
  },
}));

interface IRocketSearchGrid {
  rocketConnection: Required<RocketConnection>;
  goForward: Function;
  goBack: Function;
}

const RocketSearchGrid = ({
  rocketConnection,
  goForward,
  goBack,
}: IRocketSearchGrid) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" spacing={2}>
      <Grid container item direction="row" justify="center" xs={12}>
        <Paper className={classes.searchIntroText} elevation={7}>
          In space, rockets zoom around with no air to push against. What's
          going on? Rockets and engines in space behave according to Isaac
          Newton's third law of motion: Every action produces an equal and
          opposite reaction. When a rocket shoots fuel out one end, this propels
          the rocket forward — no air is required.
          <br />
          <br />
          NASA says this principle is easy to observe on Earth. If you stand on
          a skateboard and throw a bowling ball forward, that force will push
          you and the skateboard back. However, because your weight on the
          skateboard is heavier than that of the bowling ball, you won't move as
          far.
          <br />
          <br />
          That's the challenge engineers face when designing space engines. Yes,
          a small amount of thrust does push the spacecraft forward, but it
          often takes a great deal of fuel to get going anywhere quickly. More
          fuel means more weight, which adds to the cost of a mission. To save
          on money when shooting for far-away planets such as Jupiter, some
          spacecraft whip around a planet (say, Venus) and use its gravity to
          get a speed boost. This shortens the time it takes to get to other
          destinations.
        </Paper>
        <RocketGrid rocketsConnection={rocketConnection} />
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        className={classes.pageButtonsDiv}
      >
        <Button
          variant="contained"
          className={classes.pageButton}
          onClick={() => goBack()}
        >
          Previous page
        </Button>
        <Button
          variant="contained"
          className={classes.pageButton}
          onClick={() => goForward()}
        >
          Next page
        </Button>
      </Grid>
    </Grid>
  );
};

export default RocketSearchGrid;
