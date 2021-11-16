// actions for fetching new leads
export const FETCH_NEW_LEADS_REQUESTED = "FETCH_NEW_LEADS_REQUESTED";
export const fetchNewLeadsRequest = (payload) => {
    return { type: FETCH_NEW_LEADS_REQUESTED, payload };
};

export const FETCH_NEW_LEADS_SUCCESSFUL = "FETCH_NEW_LEADS_SUCCESSFUL";
export const fetchNewLeadsSuccess = (payload) => {
    return { type: FETCH_NEW_LEADS_SUCCESSFUL, payload };
};

export const FETCH_NEW_LEADS_FAILED = "FETCH_NEW_LEADS_FAILED";
export const fetchNewLeadsFailed = (payload) => {
    return { type: FETCH_NEW_LEADS_FAILED, payload };
};


// actions for fetching accepted leads
export const FETCH_ACCEPTED_LEADS_REQUESTED = "FETCH_ACCEPTED_LEADS_REQUESTED";
export const fetchAcceptedLeadsRequest = (payload) => {
    return { type: FETCH_ACCEPTED_LEADS_REQUESTED, payload };
};

export const FETCH_ACCEPTED_LEADS_SUCCESSFUL = "FETCH_ACCEPTED_LEADS_SUCCESSFUL";
export const fetchAcceptedLeadsSuccess = (payload) => {
    return { type: FETCH_ACCEPTED_LEADS_SUCCESSFUL, payload };
};

export const FETCH_ACCEPTED_LEADS_FAILED = "FETCH_ACCEPTED_LEADS_FAILED";
export const fetchAcceptedLeadsFailed = (payload) => {
    return { type: FETCH_ACCEPTED_LEADS_FAILED, payload };
};


// actions for accepting lead
export const ACCEPT_LEAD_REQUESTED = "ACCEPT_LEAD_REQUESTED";
export const acceptLeadRequest = (payload) => {
    return { type: ACCEPT_LEAD_REQUESTED, payload };
};

export const ACCEPT_LEAD_SUCCESSFUL = "ACCEPT_LEAD_SUCCESSFUL";
export const acceptLeadSuccess = (payload) => {
    return { type: ACCEPT_LEAD_SUCCESSFUL, payload };
};

export const ACCEPT_LEAD_FAILED = "ACCEPT_LEAD_FAILED";
export const acceptLeadFailed = (payload) => {
    return { type: ACCEPT_LEAD_FAILED, payload };
};


// actions for declining lead
export const DECLINE_LEAD_REQUESTED = "DECLINE_LEAD_REQUESTED";
export const declineLeadRequest = (payload) => {
    return { type: DECLINE_LEAD_REQUESTED, payload };
};

export const DECLINE_LEAD_SUCCESSFUL = "DECLINE_LEAD_SUCCESSFUL";
export const declineLeadSuccess = (payload) => {
    return { type: DECLINE_LEAD_SUCCESSFUL, payload };
};

export const DECLINE_LEAD_FAILED = "DECLINE_LEAD_FAILED";
export const declineLeadFailed = (payload) => {
    return { type: DECLINE_LEAD_FAILED, payload };
};
