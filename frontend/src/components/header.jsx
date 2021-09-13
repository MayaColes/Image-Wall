import React, {useState} from "react";
import {AppBar, Button, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

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
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header