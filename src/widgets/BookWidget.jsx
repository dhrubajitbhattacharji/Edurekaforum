/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddtoCart } from '../global/State';
import { MoreVert } from '@mui/icons-material';
import image from "../assets/post1.jpg"

function BookWidget({ book }) {

    const dispatch = useDispatch();
    const books = useSelector((state) => state.books);
    const isNonMobile = useMediaQuery("(max-width: 800px)");
    console.log(books);

    return (
        // <Box display='flex' flexDirection="column" justifyContent="space-evenly" width={isNonMobile ? "100%" : "30%"} p={isNonMobile ? "1rem" : "0.8rem"} border="1px solid" borderRadius="10px" >
        //     <Avatar
        //       sx={{ height: "40px", width: "40px" }}
        //       src="https://icon-library.com/images/male-avatar-icon/male-avatar-icon-15.jpg"
        //     />
        //     <Box>
                
        //         <Typography>{book.body}</Typography>
        //     </Box>
        //     <Box>
        //         <Button variant='outlined' onClick={() => dispatch(setAddtoCart({ cart: book }))}>Add to Cart</Button>
        //     </Box>
        // </Box>
        <>
        <Box display='flex' flexDirection="column" justifyContent="space-evenly" width={isNonMobile ? "100%" : "32%"} p={isNonMobile ? "1rem" : "0.8rem"} >
        <Card sx={{border: "1px", borderRadius:"10px", margin: "5px"}}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ height: "40px", width: "40px" }}
              src="https://icon-library.com/images/male-avatar-icon/male-avatar-icon-15.jpg"
            />
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={<Typography>Aritra</Typography>}
          subheader={
            <Typography sx={{ fontSize: "10px" }}>6 Hours ago</Typography>
          }
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
 {book.body}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image={image} 
          alt="Paella dish"
        />
        <Box sx={{ margin: "10px", padding: "10px"}}>
        <Button variant='outlined' onClick={() => dispatch(setAddtoCart({ cart: book }))}>Add to Cart</Button>
        </Box>
      </Card>
      </Box>
      </>
    )
}

export default BookWidget