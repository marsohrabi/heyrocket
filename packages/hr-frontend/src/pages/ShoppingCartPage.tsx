import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import { ShoppingCart } from '../shopping-cart/ShoppingCart'
import { PurchaseWindow } from '../shopping-cart/PurchaseWindow'
import { Rocket } from '../rockets/redux/model'

export interface IShoppingCart {
    shoppingCart: ReadonlyArray<Rocket>;
}

export const ShoppingCartPage: React.FC<IShoppingCart> = ({shoppingCart}: IShoppingCart) => {

    const total = shoppingCart.reduce((a, b) => a + b.price!, 0);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
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