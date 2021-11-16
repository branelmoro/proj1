import { apiServer } from "../../config.json";

export const getNewLeads = () => {
    return fetch(`${apiServer}/leads/new`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(res => {
        console.log(res);
        return res.data;
    });
};

export const getAcceptedLeads = () => {
    return fetch(`${apiServer}/leads/accepted`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(res => {
        console.log(res);
        return res.data;
    });
};

export const acceptLead = (jobId) => {
    return fetch(`${apiServer}/lead/accept/${jobId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
};

export const declineLead = (jobId) => {
    return fetch(`${apiServer}/lead/decline/${jobId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
};


// export const getDeclinedLeads = () => {
//     return Promise.resolve([]);
// };
