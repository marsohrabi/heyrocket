import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import { reducer as navigationReducer } from '../../../navigation/redux/model';
import { reducer as rocketsReducer } from "../../../rockets/redux/model";
import { reducer as modalReducer } from "../../../modal/redux/model";
import { reducer as shoppingCartReducer } from "../../../shopping-cart/redux/model"

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        navigation: navigationReducer,
        rockets: rocketsReducer,
        modal: modalReducer,
        shoppingCart: shoppingCartReducer
    });

export default createRootReducer;
export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
