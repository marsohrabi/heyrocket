import { ActionType } from 'typesafe-actions';
import { Routes, actions } from './model';
import { push } from 'connected-react-router';
import { all, put, select, takeLatest } from 'redux-saga/effects';

function* toSearch() {
    yield put(push({ pathname: Routes.search }));
}

function* watchToSearch() {
    yield takeLatest("TO_SEARCH_ROCKETS", toSearch);
}

export default function* rootSaga() {
    yield all([
        watchToSearch(),
    ]);
}