import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevToolsDevelopmentOnly} from "@redux-devtools/extension";

import {carsReducer} from "./reducers";

const rootReducer = combineReducers({
    cars: carsReducer
});

const composeEnhancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export {store}