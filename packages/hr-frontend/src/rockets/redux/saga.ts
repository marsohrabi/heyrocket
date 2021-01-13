
import { Rocket } from './model';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { DocumentNode } from "graphql"

import gql from "graphql-tag";
import { client } from "../../common/redux/gqlClient";
import { createAsyncAction } from 'typesafe-actions';

const fetchRocketsAsync = createAsyncAction(
    "FETCH_ROCKETS",
    "RECEIVE_ROCKETS",
    "FETCH_ROCKETS_ERROR"
)<any, any, any>();

const fetcher = <F, P>(q: DocumentNode, a?: F) => client.request<P>(q, a);

const fetchRocketsQuery = gql`
    query getRockets{
        getRockets{
            id
            model
            price
            description
            image_url
        }
    }
`

interface IFetchRocketsResult {
    getRockets: Rocket[]
}

function* fetchRockets() {
    const rockets: IFetchRocketsResult = yield call(fetcher, fetchRocketsQuery);
    yield put(fetchRocketsAsync.success({ rockets: rockets.getRockets }))
}


function* handleFetchRockets() {
    yield takeLatest("FETCH_ROCKETS", fetchRockets);
}

export default function* rootSaga() {
    yield all([
        handleFetchRockets(),
    ]);
}


