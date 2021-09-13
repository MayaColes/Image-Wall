import {SET_FEED, REMOVE_IMAGES} from "../actionTypes/imageActionTypes";

export const setFeedImages = (feed) => ({
    type: SET_FEED,
    feed: feed
})

export const removeImages = () => ({
    type: REMOVE_IMAGES
})