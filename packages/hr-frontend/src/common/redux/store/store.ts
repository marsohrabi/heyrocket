import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
//import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "../reducers";
import navigationRootSaga from '../../../navigation/redux/sagas'

/* const logger = createLogger({
    predicate: () => process.env.NODE_ENV !== "production",
}); */
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createRootReducer(history),
    undefined,
    compose(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)

sagaMiddleware.run(navigationRootSaga);

export default store;