import React, {useState} from "react";
import {signup} from "../../services/authServices";
import {Button, TextField} from "@material-ui/core";

function Signup (props){
    const [signedUp, setSignedUp] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSignup = async () => {
        if (password === confirmPassword) {
            let status = await signup(username, password)
            setSignedUp(status)
        }
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
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                onKeyPress={(e) => {
                    if (e.charCode === 13) handleSignup();
                }}
            />
            <Button onClick={()=>handleSignup()} color="primary" autoFocus>
                Signup
            </Button>
        </>
    )
}

export default Signup