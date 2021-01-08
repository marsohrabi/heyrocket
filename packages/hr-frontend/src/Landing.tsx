import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Typography } from '@material-ui/core';
import Hero from './Hero';

const bgUrl = process.env.PUBLIC_URL + "/Pattern-Randomized.svg";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "80vh",
        width: "90vw",
        color: "navy",
        textAlign: "center",
        borderRadius: 30,
    },
    landingTitle: {
        color: "purple",
        margin: 20,
    }
}));


const Landing: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Hero />
            <Paper className={classes.root} elevation={7}>
                <Typography className={classes.landingTitle} variant="h3">
                    Landing title
                </Typography>
                This is some other text.
            </Paper>
        </div>



    );
};

export default Landing;