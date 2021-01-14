
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


const fetchRocketsPageAsync = createAsyncAction(
    "FETCH_ROCKETS_PAGE",
    "RECEIVE_ROCKETS_PAGE",
    "FETCH_ROCKETS_PAGE_ERROR"
)<any, any, any>();


const fetchRocketsPageQuery = gql`
    query findPage {
        findPage(pageNum: $pageNum) {
            id
            model
            price
            description
            image_url
        }
    }
`

interface IFetchRocketsPageResult {
    getRockets: Rocket[]
}

function* fetchRocketsPage(pageNum: number) {
    const rockets: IFetchRocketsPageResult = yield call(fetcher, fetchRocketsPageQuery, pageNum);
    yield put(fetchRocketsPageAsync.success({ rockets: rockets.getRockets }))
}

function* handleFetchRocketsPage() {
    yield takeLatest("FETCH_ROCKETS_PAGE", fetchRocketsPage, 2);
}


export default function* rootSaga() {
    yield all([
        handleFetchRockets(),
        handleFetchRocketsPage(),
    ]);
}


