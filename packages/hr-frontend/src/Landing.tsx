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

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit arcu ac placerat fringilla. Ut facilisis tempor ligula, nec egestas velit finibus sed. Aliquam ex mi, gravida quis dolor nec, viverra scelerisque dui. Nunc feugiat sit amet sapien vitae molestie. Donec elementum enim metus. Quisque mattis convallis ultricies. Fusce imperdiet arcu felis. Fusce blandit, est vitae ullamcorper molestie, est mi mollis lorem, volutpat tristique nisl lacus vel lorem. Suspendisse sed nisi euismod, mollis lectus sed, tempus augue. Sed at ante lacinia, convallis magna eget, dignissim lorem. Integer et nisi laoreet, lacinia nunc a, facilisis ex. Donec tortor odio, lobortis at suscipit vel, eleifend ut lorem. Praesent purus sapien, consequat suscipit odio nec, gravida fringilla diam.

Suspendisse potenti. Duis suscipit vel sem quis posuere. Sed elementum, ante quis convallis molestie, est nibh facilisis tortor, ac pharetra nisl lacus eu nisl. Mauris faucibus eget libero eget tincidunt. Maecenas gravida luctus lectus a ornare. Donec ultricies placerat tempus. Sed ut sem eleifend felis fringilla rutrum id ultricies nunc. Phasellus accumsan mi quis risus tempor ullamcorper quis quis sem. Donec et arcu nec eros iaculis finibus. Ut non risus at mi auctor lacinia sed vitae lorem. Nunc pretium neque velit, et commodo nibh dictum sed. Sed non justo quam. </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4">
                            About Our Rockets
                    </Typography>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet ante vitae enim rhoncus consequat vel nec sem. Sed ornare porta nulla, sed ultrices tortor suscipit sed. Donec molestie turpis elit, ac suscipit justo aliquam vel. Integer maximus gravida faucibus. Suspendisse eget metus urna. Donec sed congue mi, id tempus lorem. Curabitur pellentesque tristique quam, at dignissim ipsum finibus eu. Aenean id varius orci. Nam libero justo, tempus sed leo quis, semper bibendum diam. Vivamus efficitur, augue quis condimentum posuere, augue purus varius metus, vel facilisis odio nibh in orci. Vestibulum laoreet sit amet ante vel efficitur. Praesent blandit pellentesque pulvinar. Nulla ut sapien posuere, pharetra lacus blandit, vulputate mi. Duis ante purus, posuere consequat nulla eu, aliquam venenatis nunc. Vivamus vulputate velit at tristique convallis. Quisque gravida tincidunt nisi vitae pellentesque.

Pellentesque tincidunt sapien sit amet nibh auctor euismod. Fusce aliquet risus vel lectus congue interdum. Morbi dui erat, tempus sagittis nisi sit amet, imperdiet ullamcorper nisl. Vestibulum eget velit est. Etiam tempus scelerisque ex, sit amet tristique lectus imperdiet id. Duis non tincidunt sem. Proin pellentesque, tortor et tristique tempus, dui sem mollis magna, eu facilisis ex nunc quis augue. Nunc efficitur, tellus eget pharetra dignissim, nisi libero imperdiet sapien, ac euismod sapien libero at ligula. Phasellus et mauris sagittis metus vestibulum pharetra in vel eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vitae lorem ut ipsum interdum scelerisque et a mi. Vestibulum vestibulum congue felis, quis convallis purus vestibulum ut. Morbi vel bibendum libero, ac sodales nunc. Aliquam tincidunt dictum ante, eget pharetra massa rutrum vitae. </Grid>
                </Grid>
                Let me tell you about how awesome HeyRocket is and convince you to buy a rocket.
            </Paper >
        </div>



    );
};

export default Landing;