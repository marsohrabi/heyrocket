import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { ShoppingCart } from './ShoppingCart'
import { PurchaseWindow } from './PurchaseWindow'
import { Rocket } from '../rockets/redux/model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "5px"
    },
  }),
);

export interface IShoppingCart {
    shoppingCart: ReadonlyArray<Rocket>;
}

export const ShoppingCartPage: React.FC<IShoppingCart> = ({shoppingCart}: IShoppingCart) => {

    const total = shoppingCart.reduce((a, b) => a + b.price!, 0);

    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={8}>
                <ShoppingCart shoppingCart={shoppingCart}/>
            </Grid>
            <Grid item xs={3}>
                <PurchaseWindow total={total}/>
            </Grid>
        </Grid>
    );
};

export default ShoppingCartPage;