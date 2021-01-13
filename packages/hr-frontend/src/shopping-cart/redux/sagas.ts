
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DocumentNode } from "graphql"

import gql from "graphql-tag";
import { client } from "../../common/redux/gqlClient";
import { createAsyncAction } from 'typesafe-actions';

export class Transaction {
    id?: number;
    total?: number;
}

const addTransactionAsync = createAsyncAction(
    "ADD_TRANSACTION",
    "ADD_TRANSACTION_SUCCESS",
    "ADD_TRANSACTION_FAILURE"
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

interface IReceiveAddTransaction {
    createTransaction: Transaction;
}

function* AddTransaction() {
    const transaction: IReceiveAddTransaction = yield call(fetcher, mutationCreateTransaction);
    yield put(addTransactionAsync.success({ transaction: transaction.createTransaction }))
}

function* watchAddTransaction() {
    yield takeLatest("ADD_TRANSACTION", AddTransaction);
}

export default function* rootSaga() {
    yield all([,
        watchAddTransaction(),
    ]);
}
