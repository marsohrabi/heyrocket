import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';
import Header from '../Header';
import { useRockets } from '../rockets/redux/hooks';
import RocketGrid from '../components/RocketGrid';
import { RemoteData, Rocket } from '../rockets/redux/model';

const useStyles = makeStyles((theme) => ({
    searchIntroText: {
        padding: "30px 0",
        width: "90%",
        textAlign: "center",
        marginBottom: 25,
    },
}));

const RocketSearchPage: React.FC = () => {
    const classes = useStyles();
    const rocketsRemoteData: RemoteData<Rocket[]> = useRockets();

    if (typeof rocketsRemoteData === "string") {

        return (<div>Fetching rockets...</div>);
    } else {
        console.log("Non-string remote data");

        return (
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Header />
                </Grid>
                <Grid container item direction="row" justify="center" xs={12}>
                    <Paper className={classes.searchIntroText} elevation={7}>
                    In space, rockets zoom around with no air to push against. What's going on?

Rockets and engines in space behave according to Isaac Newton's third law of motion: Every action produces an equal and opposite reaction.

When a rocket shoots fuel out one end, this propels the rocket forward — no air is required.
<br /><br />
NASA says this principle is easy to observe on Earth. If you stand on a skateboard and throw a bowling ball forward, that force will push you and the skateboard back. However, because your weight on the skateboard is heavier than that of the bowling ball, you won't move as far.
<br /><br />
That's the challenge engineers face when designing space engines. Yes, a small amount of thrust does push the spacecraft forward, but it often takes a great deal of fuel to get going anywhere quickly. More fuel means more weight, which adds to the cost of a mission.

To save on money when shooting for far-away planets such as Jupiter, some spacecraft whip around a planet (say, Venus) and use its gravity to get a speed boost. This shortens the time it takes to get to other destinations.
                    </Paper>
                    <RocketGrid rocketList={rocketsRemoteData} />
                </Grid>

            </Grid>
        );
    };
}

export default RocketSearchPage;