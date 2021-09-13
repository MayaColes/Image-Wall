import React, {useEffect, useState} from "react";
import {Button, makeStyles, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {createImage} from "../../services/userServices";
import ImageUploadDialog from "../../components/imageUploadDialog";

const useStyles = makeStyles((theme) => ({
        image:{
            height: "200px",
            width: "200px"
        }}
));

function NewImage (props){
    const classes = useStyles();

    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState("")
    const [title, setTitle] = useState("")

    const [imagePosted, setImagePosted] = useState(false)
    const [uploading, setUploading] = useState(false)

    const history = useHistory()

    const navigate = (path) => {
        history.push(path);
    }

    const handlePost = async () => {
        if(title !== "" && file != null){
            createImage(file, title, description, props.user.id).then(res =>{
                setImagePosted(true)
            })
        }
    }

    const handleClose = async () => {
        setUploading(false)
    }

    return(
        <>
            <ImageUploadDialog
                setImage={setImage}
                open={uploading}
                onClose={handleClose}
                file={file}
                setFile={setFile}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Title"
                name="Title"
                autoFocus
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Description"
                name="Description"
                autoFocus
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
            />

            {image == null ? null : <img src={image} className={classes.image}/>}

            <Button onClick={()=>setUploading(true)} color="primary" autoFocus>
                Upload an Image
            </Button>

            <Button onClick={()=>handlePost()} color="primary" autoFocus>
                Post
            </Button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatch = dispatch => ({
    dispatch: (data) => dispatch(data)
})

export default connect(mapStateToProps, mapDispatch)(NewImage);