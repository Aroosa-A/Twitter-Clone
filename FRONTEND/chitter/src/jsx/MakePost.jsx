import React from 'react';
import '../css/MakePost.css';
import axios from 'axios';
import { useState } from 'react';
import Dropzone from "react-dropzone";
import { Box, Button, Typography, InputBase, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { DeleteOutlined } from "@mui/icons-material";

const MakePost = ({ setChange, currentUser }) => {

    // const { palette } = useTheme();
    const [message, setMessage] = useState('');
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [chitterPost, setChitterPost] = useState({
        postBody: ``
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setChitterPost({
            ...chitterPost,
            [name]: value
        });
        setMessage('');
    }



    const postChitterPosts = async () => {
        // e.preventDefault();
        const { postBody } = chitterPost;
        const { firstName, secondName, userName } = currentUser;
        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("secondName", secondName);
        formData.append("userName", userName);
        formData.append("postBody", postBody);
        if (image) {
            formData.append("picture", image);
            formData.append("picturePath", image.name);
        }
        const token = localStorage.getItem("token");

        // const post = { firstName: firstName, secondName: secondName, userName: userName, postBody: postBody };
        if (postBody) {

            const res = await fetch(`http://localhost:4000/chitterPosts`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData

            });
            console.log(res)
            // setMessage(res.data.message);
            setChange(true);
            setChitterPost({ postBody: `` });
            setImage(null);
            setIsImage(false);
            return;
        }
        setMessage('Invalid input');
    }

    const handleImageButton = () => {
        setIsImage(!isImage);
        setMessage('');
    }






    return (
        <>
            <div className="App">
                <div>Hi! {currentUser.firstName} {currentUser.secondName} </div>
                <div>{currentUser.userName} </div> <br />
                <InputBase
                    id='postBox'
                    name="postBody"
                    value={chitterPost.postBody}
                    placeholder="What's on your mind..."
                    onChange={handleChange} required
                    sx={{

                        width: "100%",
                        padding: "1rem 2rem"
                    }}
                />
                {/* <Typography>
                    Image
                </Typography> */}
                {isImage && (
                    <Dropzone
                        acceptedFiles=".jpg,.jpeg,.png"
                        multiple={false}
                        onDrop={acceptedFiles => setImage(acceptedFiles[0])}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <Box>
                                <Box {...getRootProps()}>

                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <Typography className='addImage'>Click to add Image</Typography>
                                    ) : (
                                        <Typography>{image.name}</Typography>
                                    )}
                                </Box>
                                {image && (
                                    <IconButton
                                        onClick={() => setImage(null)}
                                    >
                                        <DeleteOutlined />
                                    </IconButton>
                                )}
                            </Box>
                        )}
                    </Dropzone>
                )}
                {message && <div id='postMessage'><small>{message}</small></div>}
                <Button type='submit' id='submit' onClick={handleImageButton}>Image</Button>

                <Button
                    disabled={!chitterPost}
                    data-testid='submit'
                    id='submit'
                    onClick={postChitterPosts}
                    endIcon={<SendIcon />}>
                    Post
                </Button>
            </div>
        </>
    );
}



export default MakePost;