import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import { RemoteData, Rocket, RocketConnection } from "../rockets/redux/model";
import ShowMoreText from "react-show-more-text";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
  },
  rocketCard: {
    width: "100%",
    height: 520,
  },
  rocketCardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  media: {
    height: "100%",
    width: "auto",
    maxHeight: 300,
  },
  price: {
    color: "darkslateblue",
    paddingLeft: 10,
  },
}));

interface IRocketGrid {
  rocketsConnection: Required<RocketConnection>;
}

interface IRocketCard {
  rocket: Rocket,
  cartAction: Function,
}

interface IRocketCard2 extends Rocket {
  cartAction: Function;
}

const RocketCard: React.FC<IRocketCard> = ({
  rocket,
  cartAction

}: IRocketCard) => {
  const classes = useStyles();
  const rocketPriceCurrency = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  }).format(rocket.price as number);

  return (
    <Grid item key={rocket.id} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.rocketCard}>
        <CardHeader title={rocket.model} />

        <CardMedia
          image={rocket.image_url}
          className={classes.media}
          title={rocket.model}
        />

        <CardContent>
          <ShowMoreText lines={3} more="more">
            {rocket.description}
          </ShowMoreText>
        </CardContent>

        <CardActions>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography className={classes.price} variant="h5">
                {rocketPriceCurrency}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

const RocketGrid: React.FC<IRocketGrid> = ({
  rocketsConnection,
}: IRocketGrid) => {
  const classes = useStyles();
  const rocketCards = [] as any;

  for (const rocketObject of rocketsConnection.rockets) {
    rocketCards.push(
      <RocketCard
        rocket={rocketObject}
        cartAction={() => console.log(rocketObject.id + ": " + rocketObject.model)}
      />
    );
  }

  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      direction="row"
      spacing={3}
    >
      {rocketCards}
    </Grid>
  );
};

export default RocketGrid;
