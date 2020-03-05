import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import gameReducer from "./reducers";
import gameSaga from "./sagas";

//ARQUIVO RESPONSÁVEL APENAS PELA CONSTRUÇÃO DA STORE 

const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(gameSaga);

export default store;