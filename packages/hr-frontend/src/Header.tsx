import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as navigationActions } from './navigation/redux/model';
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
        cursor: "pointer"
    },
    logo: {
        width: 30,
        cursor: "pointer",
    },
    tabBar: {
        flexGrow: 1,
    },
}));


const Header: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const toHome = () => {
        dispatch(navigationActions.toHome());
    }
    const toSearch = () => {
        dispatch(navigationActions.toSearch());
    };

    const toCart = () => {
        dispatch(navigationActions.toCart());
    };

    type navType = "home" | "search" | "about" | "cart";


    const handleNavClick = (selectedNav: navType) => {
        switch (selectedNav) {
            case "home":
                toHome();
                break;
            case "search":
                toSearch();
                break;
            case "cart":
                toCart();
                break;
        }
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img 
                        className={classes.logo}
                        src={logo}
                        alt="HeyRocket logo"
                        onClick={() => handleNavClick("home")} 
                        />
                    <Typography variant="h3"
                        className={classes.title}
                        onClick={() => handleNavClick("home")}
                    >
                        HeyRocket</Typography>
                    <Tab
                        label="Search"
                        onClick={() => handleNavClick("search")}
                    />
                    <Tab
                        label={<ShoppingCartIcon
                            fontSize="large" />}
                        onClick={toCart}
                    />
                </Toolbar>

            </AppBar>
        </div>

    );
};

export default Header;