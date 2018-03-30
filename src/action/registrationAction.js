import axios from 'axios';

const ROOT = "http://127.0.0.1:5000/api";

export const USEREG = "USEREG";
export const FAILEDUSEREG = "FAILEDUSERLOGIN";
export const USERLOGIN = "USERLOGIN";

export const UserReg = (values) => {
    return{
        type: USEREG,
        payload: axios.post(`${ROOT}/auth/register/`, values)
        .then((response) => {
            console.log("success", response.data);
        })
        .catch( (err)=> {
            console.log("there has an error", err)
        })

    };
}

export const UserLogin = (credentials) => {
    return {
        type: UserLogin,
        payload: axios.post(`${ROOT}/auth/login/`, credentials)
        .then((response) =>{
            console.log("loggedin", response.data);
        })
        .catch((err) => {
            console.log("error", err)
        })
    }
}