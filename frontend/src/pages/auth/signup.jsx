import React, {useState} from "react";
import {signup} from "../../services/authServices";
import {Button, Container, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

const useStyles = makeStyles((theme) => ({
    padding: {
        marginTop: theme.spacing(8)
    },
    paperPadding: {
        margin: theme.spacing(1)
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
}))

function Signup (props){
    const classes = useStyles();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    const handleSignup = async () => {
        if (password === confirmPassword) {
            signup(props.dispatch, username, password).then(res => {
                if (res){
                    navigate('/user/feed')
                }
            })
        }
    }

    return(
        <>
            <div className={classes.padding}>
                <Container component="main" maxWidth="sm">
                    <Paper className={classes.paper}>
                        <div className={classes.paperPadding}>
                            <Typography variant="h5">Sign Up</Typography>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
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
                            <Button onClick={()=>handleSignup()} color="secondary" variant="contained">
                                Signup
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </div>
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

export default connect(mapStateToProps, mapDispatch)(Signup);