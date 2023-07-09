/* eslint-disable no-unused-vars */
import { DeleteOutline, EditOutlined, MoreHoriz } from '@mui/icons-material'
import { Box, Divider, IconButton, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Flexbetween from '../components/Flexbetween'
import ModelPopup from '../components/ModelPopup'
import UserImage from '../components/UserImage'
import { setPost } from '../state'

function CommentWidget({ commentData, curPostId }) {

    const dispatch = useDispatch();
    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
    const token = useSelector((state) => state.token);
    const userId = useSelector((state) => state.user._id);
    const neutralLight = palette.neutral.light;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const cmtId = commentData._id;
    const postId = curPostId;
    const [open, setOpen] = useState();
    const [comment, setComment] = useState("");
    const [openModal, setOpenModal] = useState(false);


    const handlePostRemove = async (cmtId) => {
        const Data = { userId, postId, cmtId };
        const res = await axios.delete(`${process.env.REACT_APP_URL}/posts/comment`, {
            data: Data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const post = res.data;
        dispatch(setPost({ post }));
    }

    const updateCommentData = (comment) => {
        setOpenModal(true);
        setComment(comment);
    }


    return (
        <Box padding="0 1rem">
            <ModelPopup setOpenModal={setOpenModal} openModal={openModal} comment={comment} setComment={setComment} postId={postId} cmtId={cmtId} isComment />
            <Box>
                <Flexbetween padding={1} display="flex" >
                    <Box display="flex" alignItems="center" gap={2}>
                        <UserImage image={commentData.userPicturePath} size={isNonMobile ? 50 : 45} />
                        <Box>
                            <Typography fontFamily="serif" fontSize={isNonMobile ? 18 : 16}>{commentData.userName}</Typography>
                            <Typography fontFamily="serif" fontSize={10}>{new Date(commentData.updatedAt).toLocaleString()}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ top: 0 }}>
                        <IconButton
                            onClick={() => setOpen((on) => !on)}
                        >
                            {commentData.userId === userId &&
                                <Tooltip title="setting" placement='left'>
                                    <MoreHoriz />
                                </Tooltip>}
                        </IconButton>
                        {open && (
                            <Box
                                zIndex={5}
                                position="absolute"
                                backgroundColor={neutralLight}
                                borderRadius="4px"
                                sx={{
                                    vertical: 'top',
                                }}
                            >
                                {commentData.userId === userId && <>
                                    <Box display="flex" justifyItems="center" padding="0.5rem 0.6rem" sx={{ cursor: "pointer" }}
                                        onClick={() => updateCommentData(commentData.comment)}>
                                        <EditOutlined fontSize="small" sx={{ marginRight: "10px" }} />
                                        <Typography fontFamily="serif" fontWeight="500" fontSize="0.9rem">Edit</Typography>
                                    </Box>

                                    <Divider />

                                    <Box display="flex" justifyItems="center" padding="0.5rem 0.6rem" sx={{ cursor: "pointer" }}
                                        onClick={() => handlePostRemove(cmtId)}>
                                        <DeleteOutline fontSize="small" sx={{ marginRight: "10px" }} />
                                        <Typography fontFamily="serif" fontWeight="500" fontSize="0.9rem">Delete</Typography>
                                    </Box>
                                </>}
                            </Box >
                        )}
                    </Box>
                </Flexbetween>
                <Box sx={{ padding: "0 0 5px 0" }}>
                    <Typography fontFamily="serif" fontSize={isNonMobile ? 18 : 16} color={main}>{commentData.comment}</Typography>
                </Box>
            </Box>
            <Divider />
        </Box>
    )
}

export default CommentWidget