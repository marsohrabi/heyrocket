import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Hero from './Hero';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "80vh",
        width: "100%",
        color: "navy",
        textAlign: "center",
        borderRadius: 30,
    },
    landingTitle: {
        color: "navy",
        margin: 20,
        paddingTop: 20,
    },
    paper: {
        paddingBottom: 20,
        marginBottom: 100,
    },
    infoTable: {
        marginBottom: 10,
        padding: "10px 30px",
        maxWidth: "100%",
    },
}));


const Landing: React.FC = () => {
    const classes = useStyles();

    return (
        <div id="id2" className={classes.root}>
            <Hero />
            <Paper elevation={7} className={classes.paper}>

                <Typography className={classes.landingTitle} variant="h3">
                    Rockets for all!
                </Typography>
                <Grid container direction="row" spacing={2} className={classes.infoTable}>
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            Why HeyRocket
                        </Typography>
                    HeyRocket offers snapshots of rockets with their price and 1-click add to cart ability. One search, one page, one set of
                    results. Effortlessly manage the process. It's as easy as: 1. Add to Cart 2. Buy. Rocket buying should always be easy.
                    We are also the only rocket selling company after we destroyed rockettrader. You got no choice! Whether your goals are
                    world domination or mars colonisation, make the shift to HeyRocket, the fastest (and only) growing rocket listing platform
                    on the market.
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            About Our Rockets
                        </Typography>
                    We provide the best rockets which may or may not have been stolen from SpaceX's garage.
                     </Grid>
                </Grid>
                Let me tell you about how awesome HeyRocket is and convince you to buy a rocket.
            </Paper >
        </div>



    );
};

export default Landing;