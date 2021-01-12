import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import { ShoppingCart } from '../components/ShoppingCart'
import { PurchaseWindow } from '../components/PurchaseWindow'

const ShoppingCartPage: React.FC = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={8}>
                <ShoppingCart />
            </Grid>
            <Grid item xs={3}>
                <PurchaseWindow />
            </Grid>
        </Grid>
    );
};

export default ShoppingCartPage;