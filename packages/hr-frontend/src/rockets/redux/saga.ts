
import { PageParams, Rocket, RocketConnection } from './model';
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
)<{ params: PageParams }, { getRocketPages: RocketConnection }, any>();


const fetchRocketsPageQuery = gql`
    query getRocketPages($params:PageParams){
    getRocketPages(params:$params){
        totalCount
        rockets{
            id
            model
            price
            description
            image_url
        }
    }
}
`

interface IFetchRocketsPageResult {
    getRocketPages: RocketConnection
}


function* fetchRocketsPage(action: ReturnType<typeof fetchRocketsPageAsync.request>) {

    const rockets: IFetchRocketsPageResult = yield call(fetcher, fetchRocketsPageQuery, { params: action.payload.params });
            

    yield put(fetchRocketsPageAsync.success({ getRocketPages: rockets.getRocketPages }))
}

function* handleFetchRocketsPage() {
    yield takeLatest("FETCH_ROCKETS_PAGE", fetchRocketsPage);
}


export default function* rootSaga() {
    yield all([
        handleFetchRockets(),
        handleFetchRocketsPage(),
    ]);
}


