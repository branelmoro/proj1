import {
    FETCH_NEW_LEADS_REQUESTED,
    FETCH_NEW_LEADS_SUCCESSFUL,
    FETCH_NEW_LEADS_FAILED,
    FETCH_ACCEPTED_LEADS_REQUESTED,
    FETCH_ACCEPTED_LEADS_SUCCESSFUL,
    FETCH_ACCEPTED_LEADS_FAILED,
    ACCEPT_LEAD_REQUESTED,
    ACCEPT_LEAD_SUCCESSFUL,
    ACCEPT_LEAD_FAILED,
    DECLINE_LEAD_REQUESTED,
    DECLINE_LEAD_SUCCESSFUL,
    DECLINE_LEAD_FAILED
} from "../reduxActions/leadActions";

const initialState = {
    newLeads: [],
    acceptedLeads: []
};

export default (state = initialState, action) => {
    // console.log("lstate - ", state, action);
    switch (action.type) {
        case FETCH_NEW_LEADS_REQUESTED:
            break;
        case FETCH_NEW_LEADS_SUCCESSFUL:
            state.newLeads = action.payload;
            state.acceptedLeads = [];
            return Object.assign({}, state);
            break;
        case FETCH_NEW_LEADS_FAILED:
            break;
        case FETCH_ACCEPTED_LEADS_REQUESTED:
            break;
        case FETCH_ACCEPTED_LEADS_SUCCESSFUL:
            state.acceptedLeads = action.payload;
            state.newLeads = [];
            return Object.assign({}, state);
            break;
        case FETCH_ACCEPTED_LEADS_FAILED:
            break;
        case ACCEPT_LEAD_REQUESTED:
            break;
        case ACCEPT_LEAD_SUCCESSFUL:
            state.newLeads = state.newLeads.filter(a => a.jobId !== action.payload);
            return Object.assign({}, state);
            break;
        case ACCEPT_LEAD_FAILED:
            break;
        case DECLINE_LEAD_REQUESTED:
            break;
        case DECLINE_LEAD_SUCCESSFUL:
            state.newLeads = state.newLeads.filter(a => a.jobId !== action.payload);
            return Object.assign({}, state);
            break;
        case DECLINE_LEAD_FAILED:
            break;
    }
    return state;
};
