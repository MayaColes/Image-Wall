import React from "react"
import axios from 'axios'

export const login = async (username, password)  => {
    let user = null
    await axios.post("http://localhost:3001/login", {
        username: username,
        password: password
    }).then(res => {
        user = res.data
    })

    return user
}

export const signup = async (username, password) => {
    let registered = false

    await axios.post("http://localhost:3001/signup", {
        username: username,
        password: password
    }).then(res => {
        registered = true
    }).catch(e => {
        registered = false
    })

    return registered
}