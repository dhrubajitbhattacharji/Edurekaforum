/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material'
import React from 'react'
import UserImage from './UserImage'

function UserNav({ image, userName }) {
    return (
        <Box display="flex">
            <UserImage image={image} />
            <Box>
                <Typography>{userName}</Typography>
                <Typography>{userName}</Typography>
            </Box>
        </Box>
    )
}

export default UserNav