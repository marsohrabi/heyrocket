import { List, ListItem, Theme, makeStyles, createStyles, ListItemAvatar } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const current_shopping_cart = [
    {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    model: 'Cool Rocket 1',
}, {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    model: 'Cool Rocket 2',
}
]

export const ShoppingCart: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <List>
            {current_shopping_cart.map((item) => (
                <ListItem>
                    <img src={item.img} width='150' height='150' />
                    {item.model}
                </ListItem>
            ))}    
        </List>
    )
}