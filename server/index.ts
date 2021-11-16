import { APP } from "./src/app";

import { appPort } from "./config.json";

const port = appPort;

Promise.all([
	APP.get("mysqlDb").connect()
]).then(() => {
	return APP.listen(port, () => {
	    console.log(`Server is listening at http://localhost:${port}`);
	});
}).catch((err) => {
	console.log("Error in starting the app - ", err);
});
