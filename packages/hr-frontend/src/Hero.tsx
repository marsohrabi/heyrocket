import React from 'react';
import { makeStyles } from '@material-ui/styles';

const bgUrl = process.env.PUBLIC_URL + "/Pattern-Randomized.svg";

const useStyles = makeStyles((theme) => ({
    hero: {
        width: "100vw",
        height: "auto",
        backgroundImage: `url(${bgUrl})`,
        
    },
}));



const Hero: React.FC = () => {
    const classes = useStyles();
    
    return (<div className={classes.hero}>

    </div>);
};

export default Hero;