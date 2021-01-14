import { useSelector } from "react-redux"
import React from "react";
import { ShoppingCartPage } from "../../pages/ShoppingCartPage"
import { RootState } from "../../common/redux/reducers/index"

export const ShoppingCartContainer = () => {
    
    const shoppingCart = useSelector((state: RootState) => state.shoppingCart.shoppingCart);

    return (
        <ShoppingCartPage shoppingCart={shoppingCart} />
    )
}

export default ShoppingCartContainer;