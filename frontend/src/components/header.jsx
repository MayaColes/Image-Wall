import React, {useState} from "react";
import {AppBar, Button, Dialog, DialogContent, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {removeUser, setUser} from "../redux/actions/authActions";
import {removeImages} from "../redux/actions/imageActions";
import {setUserImages} from "../redux/actions/userActions";

const useStyles = makeStyles((theme) => ({
    buttons: {
        color: "white",

    },
    appbar: {
        background: "royalblue"
    },
    rightButton: {
        marginLeft: 'auto',
        color: "white",
    },
    logoutWrap: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    cancelButton: {
        marginRight: theme.spacing(1)
    },
    exitConfirm: {
        display: "flex",
        alignItems: "center",
    },
}))

function Header (props) {
    const classes = useStyles();

    const [logoutDialog, setLogoutDialog] = useState(false)

    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    const handlePost = async () => {
        navigate('/user/post')
    }

    const handleLogout = async () => {
        props.dispatch(setUserImages([]))
        props.dispatch(removeUser())
    }

    return (
        <>
            <Dialog
                open={logoutDialog}
            >
                <DialogContent>
                    <Typography variant="h6">
                        Are you sure you want to logout?
                    </Typography>
                    <div className={classes.logoutWrap}>
                        <div className={classes.exitConfirm}>
                            <Button
                                onClick={() => setLogoutDialog(false)}
                                color="primary"
                                variant="contained"
                                className={classes.cancelButton}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={() => {
                                    handleLogout();
                                }}
                                variant="contained"
                                color="secondary"
                            >
                                Logout
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <AppBar position="absolute">
                <Toolbar className={classes.appbar}>
                    <Button
                        className={classes.buttons}
                        onClick={() => setLogoutDialog(true)}
                        style={{ fontSize: '17px' }}
                    >
                        Logout
                    </Button>
                    <Button
                        className={classes.rightButton}
                        onClick={handlePost}
                        style={{ fontSize: '17px' }}
                    >
                        Create a post
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header