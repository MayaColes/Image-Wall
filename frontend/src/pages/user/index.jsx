import React from "react";
import {Route, Switch} from "react-router-dom";

function UserRouter (props){
    return (
        <>
            <Switch>
                <Route exact path="/home" component={home}/>
                <Route exact path="/feed" component={feed}/>
            </Switch>
        </>
    )
}

export default UserRouter