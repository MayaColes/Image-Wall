import React, {useState} from "react";
import {AppBar, Button, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link as RouterLink, useHistory} from "react-router-dom";
import {createImage} from "../services/userServices";

const useStyles = makeStyles((theme) => ({
    buttons: {
        color: "white",

    },
    appbar: {
        background: "royalblue"
    }
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

    return (
        <AppBar position="absolute">
            <Toolbar className={classes.appbar}>
                <Typography color='inherit' variant='h6' >
                    <Button
                        className={classes.buttons}
                        onClick={() => setLogoutDialog(true)}
                        style={{ fontSize: '17px' }}
                    >
                        Logout
                    </Button>
                    <Typography color='primary' variant='h6'>
                        <Link component={RouterLink} to='/user/post' >
                            Create a Post
                        </Link>
                    </Typography>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header