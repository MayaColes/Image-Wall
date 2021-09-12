import React from "react";
import {Route, Switch} from "react-router-dom";

function AuthRouter (props){
    return (
        <>
            <Switch>
                <Route exact path="/" component={landing}/>
                <Route exact path="/login" component={login}/>
                <Route exact path="/signup" component={signup}/>
            </Switch>
        </>
    )
}

export default AuthRouter