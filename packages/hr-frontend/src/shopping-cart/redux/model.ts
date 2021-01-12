import { ActionType as ActionT, action } from "typesafe-actions";


export class Transaction {
    //TODO
}

export type RemoteData<T> = "Initialized" | "Pending" | "Failure" | T;

interface IModel {
    readonly transactions: RemoteData<Transaction[]>
}

const initialState: IModel = {
    transactions: "Initialized"
}

interface IAddTransaction {
    //inputTransaction: InputTransaction;
}


export const actions = {
    fetchTransactions: () => action("FETCH_TRANSACTIONS", {}),
    recieveTransactions: (transactions: Transaction[]) => action("RECEIVE_TRANSACTIONS",  {transactions} ),
    fetchTransactionsFailure: (e: string) => action("FETCH_TRANSACTION_FAILURE", { e }),
    addTransaction: (p: IAddTransaction) => action("ADD_TRANSACTION", p)
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
        default: {
            return state
        }
    }
}