import React, {useEffect} from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Typography} from "@material-ui/core";
import Header from "../../components/header";
import {getImageFeed} from "../../services/userServices";
import {setFeed, setPageCount} from "../../redux/actions/imageActions";

function Feed (props){
    const _fetchImages = async (page) => {
        getImageFeed(page).then(res => {
            props.dispatch(setFeed(props.feed.concat(res)))
            props.dispatch(setPageCount(props.page + 1))
        })
    }

    useEffect(() => {
        if(props.feed.length === 0){
            _fetchImages(props.page)
        }
    }, [])

    return(
        <>
            <Header/>

            <Button onClick={()=>_fetchImages()}>
                Load More Images
            </Button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        page: state.image.pageCount,
        feed: state.image.feed
    }
}

const mapDispatch = dispatch => ({
    dispatch: (data) => dispatch(data)
})

export default connect(mapStateToProps, mapDispatch)(Feed);