import { ActionType } from 'typesafe-actions';
import { Routes, actions } from './model';
import { push } from 'connected-react-router';
import { all, put, select, takeLatest } from 'redux-saga/effects';


function* toHome() {
    yield put(push({ pathname: Routes.home }));
}

function* watchToHome() {
    yield takeLatest("TO_HOME", toHome);
}

function* toSearch() {
    yield put(push({ pathname: Routes.search }));
}

function* watchToSearch() {
    yield takeLatest("TO_SEARCH_ROCKETS", toSearch);
}

function* toAbout() {
    yield put(push({ pathname: Routes.about }));
}

function* watchToAbout() {
    yield takeLatest("TO_ABOUT", toAbout);
}

function* toCart() {
    yield put(push({ pathname: Routes.cart }));
}

function* watchToCart() {
    yield takeLatest("TO_CART", toCart);
}

export default function* rootSaga() {
    yield all([
        watchToHome(),
        watchToSearch(),
        watchToAbout(),
        watchToCart(),
    ]);
}