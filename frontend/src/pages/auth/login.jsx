import React, {useState} from "react";
import {login} from "../../services/authServices";
import {Button, TextField} from "@material-ui/core";
import connect from "react-redux/es/connect/connect";
import {useHistory} from "react-router-dom";

function Login (props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    const handleLogin = async () => {
        login(props.dispatch, username, password).then(res => {
            if(res){
                navigate("/user/feed")
            }
        })
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

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatch = dispatch => ({
    dispatch: (data) => dispatch(data)
})

export default connect(mapStateToProps, mapDispatch)(Login);