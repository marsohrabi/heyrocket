import { ListItem, Grid, makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { Rocket } from "../rockets/redux/model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      marginLeft: "10px"
    },
  }),
);

interface IRocket{
    readonly rocket: Rocket
}

export const ShoppingCartRow: React.FC<IRocket> = ({rocket}) => {

    const classes = useStyles();

    const rocketPriceCurrency = Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD",
      }).format(rocket.price as number);

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={2}>
                    <img src={rocket.image_url} alt='temp' width='100%' height='100%' />
                </Grid>
                <Grid item xs={8}>
                    <Typography className={classes.text}>{rocket.model}</Typography>
                </Grid>
                <Grid item xs={2}>
                    {rocketPriceCurrency}
                </Grid>
            </Grid>
        </ListItem>
    )
}