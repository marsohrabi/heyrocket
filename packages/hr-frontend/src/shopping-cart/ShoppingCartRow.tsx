import { ListItem, Grid } from "@material-ui/core";
import React from "react";
import { Rocket } from "../rockets/redux/model";

interface IRocket{
    readonly rocket: Rocket
}

export const ShoppingCartRow: React.FC<IRocket> = ({rocket}) => {

    return (
        <ListItem>
            <Grid container>
                <Grid item xs={2}>
                    <img src={rocket.image_url} alt='temp' width='100%' height='100%' />
                </Grid>
                <Grid xs={8}>
                    {rocket.model}
                </Grid>
                <Grid xs={2}>
                    ${rocket.price}
                </Grid>
            </Grid>
        </ListItem>
    )
}