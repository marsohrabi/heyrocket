
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DocumentNode } from "graphql"

import gql from "graphql-tag";
import { client } from "../../common/redux/gqlClient";
import { action, createAsyncAction } from 'typesafe-actions';

export class Transaction {
    id?: number;
    total?: number;
}

const addTransactionAsync = createAsyncAction(
    "ADD_TRANSACTION",
    "RECEIVED_ADDED_TRANSACTION",
    "ADD_TRANSACTION_ERROR"
)<any, any, any>();

const fetcher = <F, P>(q: DocumentNode, a?: F) => client.request<P>(q, a);

const mutationCreateTransaction = gql`
    mutation createTransaction($inputTransaction: inputTransaction!) {
        createTransaction(inputTransaction: $inputTransaction) {
            id
            total
        }
    }
`;

function* AddTransaction(action: ReturnType<typeof addTransactionAsync.request>) {
    const response = yield call(fetcher, mutationCreateTransaction, action.payload);
}

function* watchAddTransaction() {
    yield takeLatest("ADD_TRANSACTION", AddTransaction);
}

export default function* rootSaga() {
    yield all([,
        watchAddTransaction(),
    ]);
}
