/* eslint-disable no-unused-vars */
import { AttachFileOutlined, DeleteOutline, EditOutlined, GifBoxOutlined, ImageOutlined, MicOutlined } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, InputBase, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import React, { useState } from 'react';
import Dropzone from "react-dropzone";
import { useDispatch } from 'react-redux';
import Flexbetween from '../components/Flexbetween';
import WidgetWrapper from '../components/WidgetWrapper';
import { setPosts } from '../global/State';


function CreatePostWidget() {

    const dispatch = useDispatch();
    const [isImage, setIsImage] = useState(false);
    const [image, setImage] = useState(null);
    const [post, setPost] = useState("");
    const { palette } = useTheme();
    // const token = useSelector((state) => state.token);
    // const { _id, picturePath } = useSelector((state) => state.user);
    const isNonMobile = useMediaQuery("(min-width: 1000px)");


    const handlePost = async () => {
        const formData = new FormData();
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }

        // formData.append("userId", _id);
        formData.append("description", post);

        if (image) {
            const compressImage = await imageCompression(image, options);
            const userPicture = new File([compressImage], image.name);
            formData.append("picture", userPicture);
            formData.append("picturePath", image.name);
        }

        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_URL}/posts`, formData);
        const posts = res.data;

        dispatch(setPosts({ posts }));
        setImage(null);
        setPost("");
    }


    return (
        <WidgetWrapper sx={{ border: "1px solid black" }} mt="1rem">
            <Flexbetween gap={isNonMobile ? "1.5rem" : "0.5rem"}>
                {/* <UserImage image={picturePath} size={60} /> */}
                <InputBase
                    placeholder="Start typing to create a post.."
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                    required
                    sx={{
                        width: "100%", padding: `${isNonMobile ? "0.8rem 2rem" : "0.4rem 1rem"}`,
                        height: "3.5rem",
                        border: "1px solid gray",
                        borderRadius: "2rem", input: {
                            fontSize: "18px",
                            fontFamily: "serif",
                        }
                    }}
                />
            </Flexbetween>
            {isImage && (
                <Box border={`1px solid`}
                    borderRadius="5px" mt="1rem" p="1rem">
                    <Dropzone
                        acceptedFiles=".jpg, .jpeg, .png"
                        multiple={false}
                        onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <Flexbetween>
                                <Box
                                    {...getRootProps()}
                                    border={`1px dashed`}
                                    borderRadius="5px" p="1rem"
                                    width="100%">
                                    <input {...getInputProps()} />
                                    {!image ? (
                                        <p>Add Image Here</p>
                                    ) : (
                                        <Flexbetween>
                                            <Typography>{image.name}</Typography>
                                            <EditOutlined />
                                        </Flexbetween>
                                    )}
                                </Box>
                                {image && (
                                    <IconButton onClick={() => setImage(null)}
                                        sx={{ width: "15%" }}>
                                        <DeleteOutline />
                                    </IconButton>
                                )}
                            </Flexbetween>
                        )}
                    </Dropzone>
                </Box>
            )}

            <Divider sx={{ margin: "1.25rem 0" }} />

            <Flexbetween>
                <Flexbetween gap="0.25rem" onClick={() => setIsImage((img) => !img)}>
                    <ImageOutlined />
                    <Typography fontFamily="serif" sx={{ cursor: "pointer" }}>Image</Typography>
                </Flexbetween>

                {isNonMobile && (
                    <>
                        <Tooltip title="Updated soon">
                            <Flexbetween gap="0.25rem">
                                <GifBoxOutlined />
                                <Typography fontFamily="serif">Clip</Typography>
                            </Flexbetween>
                        </Tooltip>

                        <Tooltip title="Updated soon">
                            <Flexbetween gap="0.25rem">
                                <AttachFileOutlined />
                                <Typography fontFamily="serif">Attachment</Typography>
                            </Flexbetween>
                        </Tooltip>

                        <Tooltip title="Updated soon">
                            <Flexbetween gap="0.25rem">
                                <MicOutlined />
                                <Typography fontFamily="serif">Audio</Typography>
                            </Flexbetween>
                        </Tooltip>
                    </>
                )}

                <Button disabled={!post}
                    onClick={handlePost}
                    sx={{
                        backgroundColor: "blueviolet",
                        borderRadius: "3rem",
                        fontFamily: "serif",
                        fontWeight: "600",
                        ":hover": { backgroundColor: "blueviolet" }
                    }}>
                    POST
                </Button>
            </Flexbetween>
        </WidgetWrapper>
    )
}

export default CreatePostWidget