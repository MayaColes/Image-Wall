import React from "react";
import {Route, Switch} from "react-router-dom";
import feed from './feed'
import home from './home'
import post from './newImage'

function UserRouter (props){
    return (
        <>
            <Switch>
                <Route exact path="/user" component={home}/>
                <Route exact path="/user/feed" component={feed}/>
                <Route exact path="/user/post" component={post}/>
            </Switch>
        </>
    )
}

export default UserRouter