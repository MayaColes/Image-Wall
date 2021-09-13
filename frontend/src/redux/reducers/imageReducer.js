import {SET_FEED, REMOVE_IMAGES} from "../actionTypes/imageActionTypes";

const ImageReducer = (state = {
    feedImages: []
}, action) => {
    switch (action.types){
        case SET_FEED:
            return {...state, feedImages: action.feedImages}
        case REMOVE_IMAGES:
            return {feedImages: []}
        default:
            return state
    }
}

export default ImageReducer