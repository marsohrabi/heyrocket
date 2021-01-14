import { List, Grid, ListItem, createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import { ShoppingCartRow } from "./ShoppingCartRow"
import { IShoppingCart } from "./ShoppingCartPage"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      fontWeight: 600,
      fontSize: 24
    },
  }),
);

export const ShoppingCart: React.FC<IShoppingCart> = ({shoppingCart}) => {
    const classes = useStyles();

    return (
        <Grid>
            <List>
                <ListItem>
                    <Grid container>
                        <Grid item xs={10} className={classes.text}>
                            Shopping List
                        </Grid>
                        <Grid xs={2}>
                            Price
                        </Grid>
                    </Grid>
                </ListItem>
                {shoppingCart.map((rocket) => (
                    <ShoppingCartRow rocket={rocket} />
                ))}
            </List>
        </Grid>
    )
}