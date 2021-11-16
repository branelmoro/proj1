import { matchPath } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/index";
import rootSaga from "../sagas";
import routes from "../routes";
import { getNewLeads, getAcceptedLeads } from "../apiCalls/lead";

const getStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    const storeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(
        rootReducer,
        initialState,
        storeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default getStore;

export const getInitialState = async (req) => {
    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

    const initialState = getStore().getState();

    switch (activeRoute.path) {
        case "/":
        case "/leads/new":
            initialState.lead.newLeads = await getNewLeads();
            break;
        case "/leads/accepted":
            initialState.lead.acceptedLeads = await getAcceptedLeads();
            break;
        default:
            break;
    }
    return initialState;
};
