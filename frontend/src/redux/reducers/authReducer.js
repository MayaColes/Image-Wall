import {
    SET_USER,
    REMOVE_USER
} from "../actionTypes/authActionTypes";

const AuthReducer = (state = {
    user: null,
    loading: false
}, action) => {
    switch (action.types){
        case SET_USER:
            return {...state, user: action.user}
        case REMOVE_USER:
            return {
                user: null,
                loading: false
            }
        default:
            return state
    }
}

export default AuthReducer