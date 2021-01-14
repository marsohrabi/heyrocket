import React from 'react';
import { Grid } from '@material-ui/core';
import Landing from '../Landing';

const LandingPage: React.FC = () => {
    return (
        <Grid container direction="column" spacing={3} style={{maxWidth: "100vw"}}>
            <Grid container item direction="row" justify="center" xs={12}>
                <Landing />
            </Grid>
        </Grid>
    );
};

export default LandingPage;