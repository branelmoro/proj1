## Requirements:
NodeJs version 10 or 12


## Installation:
Go to the folder server & UI and install all dependencies:
```
cd server && npm install
cd ../UI && npm install
```


## UI - Frontend:
UI is completely developed from scrach. I have used webpack to bundle all dependencies. Webpack `npm run build` creates two bundles `server.js` (for server) & `build/bundle.js` (for browser)

`react-dom/server` and `react-router-dom` are used to provide server side rendering. This is required in search engine optimization.

I have used `react-redux-saga` for application and tried to keep entire code modular. `redux` is used for global state management & `redux-saga` is middleware for `redux`. Using `redux-saga` we can handle asynchronous behaviours seamlessly 

Configurations for UI are located in `ui/config.json` file. Please change the configurations as per your requirement.

**To run UI service go to ui folder and run:**
```
npm start
```


## Server - Backend APIs:
API service is made using MVC pattern.

Configurations for API service are located in `server/config.json` file. Please change the configurations as per your requirement.

**To run API service go to server folder and run:**
```
npm start
```
