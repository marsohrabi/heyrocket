import { ActionType as ActionT, action } from "typesafe-actions";
import { Rocket } from "../../rockets/redux/model";


export class Transaction {
    id?: number;
    total?: number;
}

export class inputTransaction {
    id?: number;
    total?: number;
}

export type RemoteData<T> = "Initialized" | "Pending" | "Failure" | T;

export class InputPurchase {
    amount!: number;
}

interface IModel {
    readonly transactions: RemoteData<Transaction[]>;
    readonly shoppingCart: ReadonlyArray<Rocket>;
}

const initialState: IModel = {
    transactions: "Initialized",
    shoppingCart: new Array<Rocket>(),
}

export const actions = {
    addPurchase: (p: InputPurchase) => action("ADD_PURCHASE", p),
    
    addToCart: (p: Rocket) => action("ADD_TO_CART", p),
    emptyCart: () => action("EMPTY_CART"),
}

export type ActionType = ActionT<typeof actions>


export const reducer = (state: IModel = initialState, action: ActionType): IModel => {

    switch (action.type) {
        case "ADD_TO_CART": {
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]

            }
        }
        case "EMPTY_CART": {
            return {
                ...state,
                shoppingCart: new Array<Rocket>(),
            }
        }

        default: {
            return state
        }
    }
}