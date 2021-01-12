import { List } from "@material-ui/core";
import React from "react";
import { ShoppingCartRow } from "./ShoppingCartRow"

const current_shopping_cart = [
    {
    image_url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    model: 'Cool Rocket 1',
}, {
    image_url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    model: 'Cool Rocket 3',
}
]

export const ShoppingCart: React.FC = () => {

    return (
        <List>
            {current_shopping_cart.map((item) => (
                <ShoppingCartRow rocket={item} />
            ))}    
        </List>
    )
}