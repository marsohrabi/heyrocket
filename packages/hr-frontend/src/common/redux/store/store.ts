import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "../reducers";
import navigationRootSaga from '../../../navigation/redux/sagas';
import rocketsRootSaga from "../../../rockets/redux/saga";
import shoppingCartRootSaga from "../../../shopping-cart/redux/saga"

const logger = createLogger({
    predicate: () => process.env.NODE_ENV !== "production",
});

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    createRootReducer(history),
    undefined,
    compose(applyMiddleware(routerMiddleware(history), logger, sagaMiddleware))
)

sagaMiddleware.run(navigationRootSaga);
sagaMiddleware.run(rocketsRootSaga);
sagaMiddleware.run(shoppingCartRootSaga);

export default store;