import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "./redusers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSagaWatcher } from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSagaWatcher)