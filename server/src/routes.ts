import * as express from "express";
import {
	getNewLeads,
	getAcceptedLeads,
	acceptLead,
	declineLead
} from './controllers/jobsController';

const router = express.Router();
router.get("/leads/new", getNewLeads);
router.get("/leads/accepted", getAcceptedLeads);
router.put("/lead/accept/:jobId", acceptLead);
router.put("/lead/decline/:jobId", declineLead);

export {
	router
};
