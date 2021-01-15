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
import { Rocket, RocketConnection } from "../redux/model";
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
  addToCart: Function
}

interface IRocketCard {
  rocket: Rocket,
  addToCart: Function
}

const RocketCard: React.FC<IRocketCard> = ({
  rocket,
  addToCart
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
              <Button variant="contained" color="secondary" onClick={() => addToCart(rocket)}>
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
  addToCart,
}: IRocketGrid) => {
  const classes = useStyles();
  const rocketCards = [] as any;

  for (const rocketObject of rocketsConnection.rockets) {
    rocketCards.push(
      <RocketCard
        key={rocketObject.id}
        rocket={rocketObject}
        addToCart={addToCart}
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
