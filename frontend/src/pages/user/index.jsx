import React from "react";
import {Route, Switch} from "react-router-dom";
import feed from './feed'
import home from './home'

function UserRouter (props){
    return (
        <>
            <Switch>
                <Route exact path="/user" component={home}/>
                <Route exact path="/user/feed" component={feed}/>
            </Switch>
        </>
    )
}

export default UserRouter