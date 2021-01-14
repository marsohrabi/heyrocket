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

interface IModel {
    readonly transactions: RemoteData<Transaction[]>;
    readonly shoppingCart: ReadonlyArray<Rocket>;
}

const initialState: IModel = {
    transactions: "Initialized",
    shoppingCart: new Array<Rocket>()
}

export const actions = {
    fetchTransactions: () => action("FETCH_TRANSACTIONS", {}),
    recieveTransactions: (transactions: Transaction[]) => action("RECEIVE_TRANSACTIONS",  {transactions} ),
    fetchTransactionsFailure: (e: string) => action("FETCH_TRANSACTION_FAILURE", { e }),
    addTransaction: (p: number) => action("ADD_TRANSACTION", p),
    addToCart: (p: Rocket) => action("ADD_TO_CART", p),
    emptyCart: () => action("EMPTY_CART")
}

export type ActionType = ActionT<typeof actions>


export const reducer = (state: IModel = initialState, action: ActionType): IModel => {

    switch (action.type) {
        case "FETCH_TRANSACTIONS": {
            return {
                ...state,
                transactions: "Pending"
            }
        }
        case "FETCH_TRANSACTION_FAILURE": {
            return {
                ...state,
                transactions: "Failure"
            }
        }
        case "RECEIVE_TRANSACTIONS": {
            return {
                ...state,
                transactions: action.payload.transactions
            }
        }
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