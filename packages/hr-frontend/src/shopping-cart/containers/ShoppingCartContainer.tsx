import React from "react";
import { ShoppingCartPage } from "../../pages/ShoppingCartPage"
import { useShoppingCart } from "../hooks"

export const ShoppingCartContainer = () => {
    
    const shoppingCart = useShoppingCart();

    return (
        <ShoppingCartPage shoppingCart={shoppingCart} />
    )
}

export default ShoppingCartContainer;