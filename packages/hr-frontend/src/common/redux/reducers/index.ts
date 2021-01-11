import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";

import { reducer as navigationReducer } from '../../../navigation/redux/model';

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        navigation: navigationReducer,
    });

export default createRootReducer;
export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
