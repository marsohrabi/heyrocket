import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Header from '../Header';
import { useRockets } from '../rockets/redux/hooks';
import RocketGrid from '../components/RocketGrid';
import { RemoteData, Rocket } from '../rockets/redux/model';


const RocketSearchPage: React.FC = () => {
    const rockets : RemoteData<Rocket[]> = useRockets();
    
    return (
        <Grid container direction="column" spacing={3} >
            <Grid item>
                <Header />
            </Grid>
            <Grid container item direction="row" justify="center" xs={12}>
                <RocketGrid rocketList={rockets}/>
            </Grid>
        </Grid>
    );
};

export default RocketSearchPage;