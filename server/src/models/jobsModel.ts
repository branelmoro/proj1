import { APP } from "../app";

import {
	newJobsQuery,
	acceptedJobsQuery,
	updateJobStatusQuery
} from "../utils/queries";

class JobsModel {
	
	public static async getNewJobs() {
		const data = await APP.get("mysqlDb").query(newJobsQuery);
		return data.map(a => {
			a.name = a.name.split(" ")[0];
			return a;
		});
	}
	
	public static async getAcceptedJobs() {
		return await APP.get("mysqlDb").query(acceptedJobsQuery);
	}
	
	public static async acceptJob(jobId) {
		return await APP.get("mysqlDb").query(updateJobStatusQuery, ["accepted", jobId]);
	}
	
	public static async declineJob(jobId) {
		return await APP.get("mysqlDb").query(updateJobStatusQuery, ["declined", jobId]);
	}
}

export {
	JobsModel
};
