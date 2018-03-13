import { combineReducers } from "redux";

import Registration from "./registration";

const rootReducer = combineReducers({
    auth: Registration
});

export default rootReducer;