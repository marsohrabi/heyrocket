import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Landing from '../Landing';
import { ShoppingCart } from '../components/ShoppingCart'

const ShoppingCartPage: React.FC = () => {
    return (
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <Header />
            </Grid>
            <Grid container item direction="row" xs={12}>
                <ShoppingCart />
            </Grid>
        </Grid>
    );
};

export default ShoppingCartPage;