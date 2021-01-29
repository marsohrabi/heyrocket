import {ActionType as ActionT, action} from 'typesafe-actions';

const initialState = {};

export enum Routes {
    home = "/",
    search = "/rockets",
    about = "/about",
    cart = "/cart",
}

export const actions = {
    toHome: () => action("TO_HOME", {}),
    toAbout: () => action("TO_ABOUT", {}),
    toSearch: () => action("TO_SEARCH_ROCKETS", {}),
    toCart: () => action("TO_CART", {}),
}

export type ActionType = 
    | ActionT<typeof actions>;

export const reducer = (state = initialState, action: ActionType) => {
    return state;
};