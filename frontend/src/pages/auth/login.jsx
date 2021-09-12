import React, {useState} from "react";
import {login} from "../../services/authServices";
import {Button, TextField} from "@material-ui/core";

function Login (props){
    const [loggedIn, setLoggedIn] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (username, password) => {
        let status = await login(username, password)
        setLoggedIn(status)
    }

    return(
        <>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
                onKeyPress={(e) => {
                    if (e.charCode === 13) handleLogin();
                }}
            />
            <Button onClick={()=>handleLogin()} color="primary" autoFocus>
                Login
            </Button>
        </>
    )
}

export default Login