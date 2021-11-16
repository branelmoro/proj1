import { JobsModel } from "../models/jobsModel";

const getNewLeads = async (req, res) => {
	try {
		const data = await JobsModel.getNewJobs();
		return res.send({success: true, data });
	} catch(err) {
		console.log("Error in fetching new jobs", err);
		return res.status(500).send({success: false, error: "Something went wrong"});
	}
};

const getAcceptedLeads = async (req, res) => {
	try {
		const data = await JobsModel.getAcceptedJobs();
		return res.send({success: true, data });
	} catch(err) {
		console.log("Error in fetching new jobs");
		return res.status(500).send({success: false, error: "Something went wrong"});
	}
};

const acceptLead = async (req, res) => {
	try {
		const data = await JobsModel.acceptJob(req.params.jobId);
		return res.send({success: true, data });
	} catch(err) {
		console.log("Error in fetching new jobs");
		return res.status(500).send({success: false, error: "Something went wrong"});
	}
};

const declineLead = async (req, res) => {
	try {
		const data = await JobsModel.declineJob(req.params.jobId);
		return res.send({success: true, data });
	} catch(err) {
		console.log("Error in fetching new jobs");
		return res.status(500).send({success: false, error: "Something went wrong"});
	}
};

export {
	getNewLeads,
	getAcceptedLeads,
	acceptLead,
	declineLead
};
