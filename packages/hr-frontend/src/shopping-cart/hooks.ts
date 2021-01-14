import { useSelector } from "react-redux";
import { RootState } from "../common/redux/reducers";

export const useShoppingCart = () => {
    return useSelector((state: RootState) => state.shoppingCart.shoppingCart);
}