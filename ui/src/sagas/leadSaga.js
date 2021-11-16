import { takeLatest, call, put } from "redux-saga/effects";
import {
    FETCH_NEW_LEADS_REQUESTED,
    fetchNewLeadsSuccess,
    FETCH_ACCEPTED_LEADS_REQUESTED,
    fetchAcceptedLeadsSuccess,
    ACCEPT_LEAD_REQUESTED,
    acceptLeadSuccess,
    DECLINE_LEAD_REQUESTED,
    declineLeadSuccess
} from "../reduxActions/leadActions";
import {
    getNewLeads,
    getAcceptedLeads,
    acceptLead,
    declineLead
} from "../apiCalls/lead";

function *initiateFetchNewLeadsRequest (data) {
    try {
        const newLeads = yield call(getNewLeads, data.payload);
        console.log("FetchNewLeadsRequest response is-------------", newLeads);
        if (newLeads) {
            yield put(fetchNewLeadsSuccess(newLeads));
        } else {
            console.log("leads not returned in FetchNewLeadsRequest");
        }
    } catch (e) {
        console.log("FetchNewLeadsRequest err is-------------", e);
    }
}

export function *watchFetchNewLeadsRequest () {
    yield takeLatest(FETCH_NEW_LEADS_REQUESTED, initiateFetchNewLeadsRequest);
}


function *initiateFetchAcceptedLeadsRequest (data) {
    try {
        const newLeads = yield call(getAcceptedLeads, data.payload);
        console.log("FetchAcceptedLeadsRequest response is-------------", newLeads);
        if (newLeads) {
            yield put(fetchAcceptedLeadsSuccess(newLeads));
        } else {
            console.log("leads not returned in FetchAcceptedLeadsRequest");
        }
    } catch (e) {
        console.log("FetchAcceptedLeadsRequest err is-------------", e);
    }
}

export function *watchFetchAcceptedLeadsRequest () {
    yield takeLatest(FETCH_ACCEPTED_LEADS_REQUESTED, initiateFetchAcceptedLeadsRequest);
}

function *initiateAcceptLeadRequest (data) {
    try {
        const newLeads = yield call(acceptLead, data.payload);
        console.log("AcceptLeadRequest response is-------------", newLeads);
        if (newLeads) {
            yield put(acceptLeadSuccess(data.payload));
        } else {
            console.log("leads not returned in AcceptLeadRequest");
        }
    } catch (e) {
        console.log("AcceptLeadRequest err is-------------", e);
    }
}

export function *watchAcceptLeadRequest () {
    yield takeLatest(ACCEPT_LEAD_REQUESTED, initiateAcceptLeadRequest);
}

function *initiateDeclineLeadRequest (data) {
    try {
        const newLeads = yield call(declineLead, data.payload);
        console.log("DeclineLeadRequest response is-------------", newLeads);
        if (newLeads) {
            yield put(declineLeadSuccess(data.payload));
        } else {
            console.log("leads not returned in DeclineLeadRequest");
        }
    } catch (e) {
        console.log("DeclineLeadRequest err is-------------", e);
    }
}

export function *watchDeclineLeadRequest () {
    yield takeLatest(DECLINE_LEAD_REQUESTED, initiateDeclineLeadRequest);
}
