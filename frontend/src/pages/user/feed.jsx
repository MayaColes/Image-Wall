import React, {useEffect} from "react";
import connect from "react-redux/es/connect/connect";
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import Header from "../../components/header";
import {getImageFeed} from "../../services/userServices";
import {setFeed, setPageCount} from "../../redux/actions/imageActions";

const useStyles = makeStyles((theme) => ({
    picture: {
        height: "400px",
        width: "400px"
    },
    card: {
        padding: theme.spacing(2),
        height: "100%",
    },
    centerWrapper: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    smallSpace: {
        padding: theme.spacing(1),
    },
    background: {
        background: "ghostwhite"
    },
}));

function Feed (props){
    const classes = useStyles();

    const _fetchImages = async () => {
        getImageFeed(props.page).then(res => {
            props.dispatch(setFeed(props.feed.concat(res)))
            props.dispatch(setPageCount(props.page + 1))
        })
    }

    useEffect(() => {
        if(props.feed.length === 0){
            _fetchImages()
        }
    }, [])

    return(
        <>
            <Header/>
            <div className={classes.background}>
                <Grid container spacing={3}>
                    {props.feed.map(image => {
                        console.log(image)
                        return (
                            <>
                                <Grid item xs={12} className={classes.centerWrapper}>
                                    <Paper className={classes.card}>
                                        <Typography variant='body2'>
                                            Posted by {image.user.username}
                                        </Typography>
                                        <Typography variant='h5'>
                                            {image.name}
                                        </Typography>
                                        <Typography>
                                            {image.description}
                                        </Typography>
                                        <img src={"http://localhost:3001" + image.picture.url} className={classes.picture}/>
                                    </Paper>
                                    <div className={classes.smallSpace}/>
                                </Grid>
                            </>)
                    })}
                    <Grid item xs={12} className={classes.centerWrapper}>
                        <Button onClick={()=>_fetchImages()}>
                            Load More Images
                        </Button>
                    </Grid>
                </Grid>
            </div>
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