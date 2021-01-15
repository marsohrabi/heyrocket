import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as modalActions } from "../redux/model";
import { actions as shoppingCartActions} from "../../shopping-cart/redux/model"
import { RootState } from "../../common/redux/reducers/index"
import { useModal } from "../hooks";
import { PurchaseModal } from "../PurchaseModal"

export const PurchaseModalContainer = () => {
    const dispatch = useDispatch();
    const modal = useModal();
    const shoppingCart = useSelector((state: RootState) => state.shoppingCart.shoppingCart);
    const total = shoppingCart.reduce((a, b) => a + b.price!, 0);
    
    const handleOpen = () => {
        dispatch(shoppingCartActions.addPurchase({amount: total}));
        dispatch(shoppingCartActions.emptyCart());
        dispatch(modalActions.openModal());
    }

    const handleClose = () => {
        dispatch(modalActions.closeModal());
    };

    return (
        <PurchaseModal
            open={modal.openModal}
            handleClose={handleClose}
            handleOpen={handleOpen}
        />
    );
};
