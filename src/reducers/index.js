import { combineReducers } from "redux";

import Registration from "./registrationReducer";

const rootReducer = combineReducers({
    auth: Registration
});

export default rootReducer;