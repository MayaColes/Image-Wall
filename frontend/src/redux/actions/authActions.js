import {
    SET_USER,
    REMOVE_USER,
} from "../actionTypes/authActionTypes";

export const setUserImages = (user) => ({
    type: SET_USER,
    user: user
})

export const removeUser = () => ({
    type: REMOVE_USER
})
