import { all, fork } from "redux-saga/effects";

import {
    watchFetchNewLeadsRequest,
    watchFetchAcceptedLeadsRequest,
    watchAcceptLeadRequest,
    watchDeclineLeadRequest
} from "./leadSaga";

const allSagas = [
    watchFetchNewLeadsRequest,
    watchFetchAcceptedLeadsRequest,
    watchAcceptLeadRequest,
    watchDeclineLeadRequest
];

export default function *rootSaga () {
    // yield all(allSagas.map(saga => saga()));
    // yield all(allSagas.map(saga => fork(saga)));
    yield all(allSagas.map(fork));
}
