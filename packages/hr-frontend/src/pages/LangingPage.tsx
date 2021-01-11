import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import Landing from '../Landing';

const LandingPage: React.FC = () => {
    return (
        <Grid container direction="column" spacing={3}>
            <Grid item>
                <Header />
            </Grid>
            <Grid container item direction="row" justify="center" xs={12}>
                <Landing />
            </Grid>
        </Grid>
    );
};

export default LandingPage;