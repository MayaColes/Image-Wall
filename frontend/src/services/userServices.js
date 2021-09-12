import React from "react"
import axios from 'axios'

export const getUserImages = async (userId) => {
    let images = []

    await axios.post("http://localhost:3001/user_images", {
        user_id: userId
    }).then(res => {
        images = res.data
    })

    return images
}

export const getImageFeed = async (page) => {
    let images = []

    await axios.get(`http://localhost:3001/feed?page=${page}`)
        .then(res => {
            images = res.data
        })

    return images
}

export const createImage = async (image, name, description) => {
    let success = false
    let data = new FormData();
    data.append("image", image)
    data.append("name", name)
    data.append("description", description)

    await axios.post("http://localhost:3001/images", data)
        .then(res => {
            success = true
        })
        .catch(e => {
            success = false
        })

    return success
}