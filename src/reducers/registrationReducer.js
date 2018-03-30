// import { USERLOGIN } from "../action/registrationAction";

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
        case "FAILEDUSEREG":
            return{
                ...state,
                isRegisterd:false
            }
            
    default :
        return state;
    }       
}