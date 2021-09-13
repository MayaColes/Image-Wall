import React, {useEffect, useRef, useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, makeStyles, Typography} from "@material-ui/core";
import Dropzone from 'react-dropzone'

const useStyles = makeStyles((theme) => ({
    profile:{
        width:"300px",
        height:"auto",
    },
    sliderContainer:{
        display:'flex',
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
    },
    slider:{
        flexGrow:1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        alignContent:'center'
    },
    zoom:{
        fontWeight:'bold',
    },
    sliderText:{
        fontWeight:'bold',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    inputContainer:{
        width:'300px',
        height:'300px',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    uploadText:{
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        width:'100%'
    },
    image:{
        height: "200px",
        width: "200px"
    }}
));

function ImageUploadDialog(props) {
    const classes = useStyles();

    const [imageURL, setImageURL] = useState(null)
    const [file, setFile] = useState(null)

    const handleClose = () => {
        props.onClose()
    };


    const handleDrop = (dropped) => {
        if(!dropped || !dropped.length) return
        let file = dropped[0]
        let type = file.type.split('/')[0]
        if(type !== 'image') return
        setImageURL(URL.createObjectURL(dropped[0]))
        setFile(dropped[0])
    }

    const handleUpload = () => {
        if(props.setImage) props.setImage(imageURL)
        if(props.setFile) props.setFile(file)
        if(props.onClose) props.onClose()
    }

    return (
        <Dialog keepMounted open={props.open} onClose={handleClose}>{
            <><DialogContent>
                <Dropzone
                    onDrop={handleDrop}
                    noKeyboard
                    style={{ width: '300px', height: '300px' }}
                >
                    {({ getRootProps, getInputProps, isDragActive }) => (
                        imageURL == null ? <div className={classes.inputContainer} {...getRootProps()}>
                            {isDragActive ? <Typography className={classes.uploadText}>
                                Drop Image
                            </Typography> : <Typography className={classes.uploadText}>
                                Click this box to upload an image or drag and drop image inside this box
                            </Typography>}
                            <input {...getInputProps()} />
                        </div> : <>
                            <img src={imageURL} className={classes.image}/>
                        </>
                    )}
                </Dropzone>
            </DialogContent>
                <DialogActions>
                    <Button color='primary' onClick={props.onClose}>
                        Close
                    </Button>
                    <Button
                        color='primary'
                        onClick={() => setImageURL(null)}
                        disabled={imageURL == null}
                    >
                        Reset
                    </Button>
                    <Button
                        color='secondary'
                        variant='contained'
                        onClick={handleUpload}
                        disabled={imageURL == null}
                    >
                        Upload
                    </Button>
                </DialogActions>
            </>} </Dialog>
    );
}

export default ImageUploadDialog