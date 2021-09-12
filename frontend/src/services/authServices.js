import React from "react"
import axios from 'axios'
import {setUser} from '../redux/actions/authActions'

export const login = async (dispatch, username, password)  => {
    await axios.post("http://localhost:3001/login", {
        username: username,
        password: password
    }).then(res => {
        dispatch(setUser(res.data))
    }).catch(e => {
        return false
    })

    return true
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