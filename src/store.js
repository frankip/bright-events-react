import { applyMiddleware, createStore } from "redux";


// middlewares
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

// local imports
import reducer from "./reducers";

// const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, applyMiddleware(thunk, logger, promise()));