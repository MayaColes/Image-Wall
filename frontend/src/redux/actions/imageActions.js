import {SET_FEED, SET_PAGE_COUNT, REMOVE_IMAGES} from "../actionTypes/imageActionTypes";

export const setFeed = (feed) => ({
    type: SET_FEED,
    feed: feed
})

export const setPageCount = (page) => ({
    type: SET_PAGE_COUNT,
    pageCount: page
})

export const removeImages = () => ({
    type: REMOVE_IMAGES
})