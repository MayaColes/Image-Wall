import {
    SET_USER_USERNAME,
    SET_USER_IMAGES,
    REMOVE_USER
} from "../actionTypes/userActionTypes";

const UserReducer = (state = {
    username: "",
    images: []
}, action) => {
    switch (action.type){
        case SET_USER_IMAGES:
            return {...state, images: action.images}
        case SET_USER_USERNAME:
            return {...state, username: action.username}
        case REMOVE_USER:
            return {
                username: "",
                images: []
            }
        default:
            return state
    }
}

export default UserReducer