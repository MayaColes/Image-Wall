import {
    REMOVE_USER,
    SET_USER_IMAGES,
    SET_USER_USERNAME,
} from "../actionTypes/userActionTypes"

export const setUserImages = (images) => ({
    type: SET_USER_IMAGES,
    images: images
})

export const setUserUsername = (username) => ({
    type: SET_USER_USERNAME,
    username: username
})

export const removeUser = () => ({
    type: REMOVE_USER
})