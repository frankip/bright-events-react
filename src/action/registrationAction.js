import axios from 'axios';

const ROOT = "http://127.0.0.1:5000/api";

export const USEREG = "USEREG";
export const USERLOGIN = "USERLOGIN";

export const UserReg = (values) => {
    return{
        type: USEREG,
        payload: axios.post(`${ROOT}/auth/register/`, values)
        .then((response) => {
            console.log("success", response.data)
        })
        .catch( (err)=> {
            console.log("there has an error", err)
        })

    }
}