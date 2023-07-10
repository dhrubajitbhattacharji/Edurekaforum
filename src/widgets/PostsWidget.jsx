/* eslint-disable no-unused-vars */
import { Box } from '@mui/material'
import React from 'react'
import PostWidget from './PostWidget'
import CreatePostWidget from './CreatePostWidget'

function PostsWidget() {
    return (
        <Box sx={{}} p={2} flex={4}>
            {/* <PostWidget /> */}
            {/* <PostWidget />
            <PostWidget />
            <PostWidget />
            <PostWidget /> */}
            <CreatePostWidget/>
        </Box>
    )
}

export default PostsWidget