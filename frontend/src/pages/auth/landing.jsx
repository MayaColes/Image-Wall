import React from "react";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core"
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    centerWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    background: {
        background: "ghostwhite"
    },
    wrapper: {
        marginTop: theme.spacing(1),
        height: "100%"
    },
    button: {
        width: "100%"
    }
}));

function Landing (props){
    const history = useHistory()
    const classes = useStyles();

    const navigate = (path) => {
        history.push(path);
    }

    return(
        <>
            <div>
                <Grid container spacing={3} className={classes.wrapper}>
                    <Grid item xs={12} className={classes.centerWrapper}>
                        <Typography variant='h4'>
                            Welcome to Image Wall!
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.centerWrapper}/>
                    <Grid item xs={3} className={classes.centerWrapper}>
                        <Button onClick={()=>navigate("/login")} color="primary" variant="contained" className={classes.button}>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.centerWrapper}>
                        <Button onClick={()=>navigate("/signup")} color="secondary" variant="contained" className={classes.button}>
                            Signup
                        </Button>
                    </Grid>
                    <Grid item xs={3} className={classes.centerWrapper}/>
                </Grid>
            </div>
        </>
    )
}

export default Landing