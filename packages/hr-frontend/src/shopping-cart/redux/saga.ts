import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DocumentNode } from "graphql"
import { InputPurchase } from './model';

import gql from "graphql-tag";
import { client } from "../../common/redux/gqlClient";
import { createAsyncAction } from 'typesafe-actions';


const addTransactionAsync = createAsyncAction(
    "ADD_PURCHASE",
    "RECEIVED_ADDED_TRANSACTION",
    "ADD_TRANSACTION_ERROR"
)<{inputPurchase: InputPurchase }, any, any>();

const fetcher = <F, P>(q: DocumentNode, a?: F) => client.request<P>(q, a);

const mutationCreatePurchase = gql`
    mutation createPurchase($inputPurchase: InputPurchase!){
    createPurchase(inputPurchase: $inputPurchase){
        amount
    }
}
`;

function* AddPurchases(action: ReturnType<typeof addTransactionAsync.request>) {
    console.log(action.payload)
    const response = yield call(fetcher, mutationCreatePurchase, {inputPurchase: action.payload});

    yield put(addTransactionAsync.success({response}))
}

function* handleAddPurchase() {
    yield takeLatest("ADD_PURCHASE", AddPurchases);
}

export default function* rootSaga() {
    yield all([
        handleAddPurchase(),
    ]);
}
