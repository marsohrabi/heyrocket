
import gql from "graphql-tag";
import { all, takeLatest } from "redux-saga/effects";

const mutationCreateTransaction = gql`
    mutation createTransaction($inputTransaction: inputTransaction!) {
        createTransaction(inputTransaction: $inputTransaction) {
            id
            total
        }
    }
`;

function* watchAddTransaction() {
    //TODO
}

export default function* rootSaga() {
    yield all([,
        watchAddTransaction(),
    ]);
}
