/* eslint-disable no-unused-vars */
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import AllBooksWidget from '../../widgets/AllBooksWidget';
import NavBar from '../../components/NavBar';


function BookPage() {

    const { palette } = useTheme();
    const isNonMobile = useMediaQuery("(max-width: 800px)");

    return (
        <Box>
             <NavBar/>
            <Box width={isNonMobile ? "auto" : "90%"} my="1rem" mx="5%" display="flex" justifyContent="center">
                <AllBooksWidget />
            </Box>
        </Box >
    )
}

export default BookPage;