import React, {useEffect} from "react";
import {Route, Switch, useHistory} from "react-router-dom";
import feed from './feed'
import home from './home'
import post from './newImage'
import connect from "react-redux/es/connect/connect";

function UserRouter (props){
    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    useEffect(() => {
        if(props.user == null){
            navigate('/')
        }
    }, [props.user])

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

const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}

const mapDispatch = dispatch => ({
    dispatch: (data) => dispatch(data)
})

export default connect(mapStateToProps, mapDispatch)(UserRouter);