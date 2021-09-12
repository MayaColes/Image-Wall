import React from "react";
import {Button, Typography} from "@material-ui/core"
import { useHistory } from 'react-router-dom'

function Landing (props){
    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    return(
        <>
            <Typography>
                Welcome to Image Wall!
            </Typography>
            <Button onClick={()=>navigate("/login")} color="primary" autoFocus>
                Login
            </Button>
            <Button onClick={()=>navigate("/signup")} color="primary" autoFocus>
                Signup
            </Button>
        </>
    )
}

export default Landing