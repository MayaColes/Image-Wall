import {SET_FEED, SET_PAGE_COUNT, REMOVE_IMAGES} from "../actionTypes/imageActionTypes";

const ImageReducer = (state = {
    feed: [],
    pageCount: 1
}, action) => {
    switch (action.type){
        case SET_FEED:
            return {...state, feed: action.feed}
        case SET_PAGE_COUNT:
            return {...state, pageCount: action.pageCount}
        case REMOVE_IMAGES:
            return {
                feedImages: [],
                pageCount: 0
            }
        default:
            return state
    }
}

export default ImageReducer