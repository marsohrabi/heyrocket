import React from 'react';
import {useDispatch} from 'react-redux';
import {actions as navigationActions} from './navigation/redux/model';
import { AppBar, Tab, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const logo = process.env.PUBLIC_URL + "/logo.svg";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        paddingLeft: 15,
        paddingTop: 10,
    },
    tabBar: {
        flexGrow: 1,
    },
}));


const Header: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const toSearch = () => {
        dispatch(navigationActions.toSearch());
    };

    type navType = "search" | "home" | "about" | "cart";

    const handleNavClick = (selectedNav: navType) => {
        switch (selectedNav) {
            case "search":
                console.log("Search button clicked");
                break;
            case "home":
                console.log("Home button clicked");
                break;
            case "about":
                console.log("About button clicked");
                break;
            case "cart":
                console.log("Cart button clicked");
                break;
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} width={"30px"}
                        alt="HeyRocket logo"
                        onClick={() => handleNavClick("home")} />
                    <Typography variant="h3"
                        className={classes.title}
                        onClick={() => handleNavClick("home")}
                        >
                        HeyRocket</Typography>
                    <Tab
                        label="Search"
                        onClick={toSearch}
                    />
                    <Tab
                        label="About"
                        onClick={() => handleNavClick("about")}
                    />
                    <Tab
                        label={<ShoppingCartIcon
                            fontSize="large" />}
                        onClick={() => handleNavClick("cart")}
                    />
                </Toolbar>

            </AppBar>
        </div>

    );
};

export default Header;