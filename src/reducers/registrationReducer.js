// import { USEREG } from "../action/registrationAction";
export const initialState = {
    token: null,
    isRegisterd: false,
    message: '',
    error: null,
};

export default (state = {}, action) => {
    switch (action.type){
        case "USEREG":
            return {
                ...state, 
                isRegisterd:true
            }
        
    default :
        return state;
    }       
}