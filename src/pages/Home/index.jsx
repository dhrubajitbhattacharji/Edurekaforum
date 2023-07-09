/* eslint-disable no-unused-vars */
import { Box, Divider, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import BottomNav from "../../components/BottomNav";
import LeftBar from "../../components/LeftBar";
import NavBar from "../../components/NavBar";
import RightBar from "../../components/RightBar";
import CreatePostWidget from "../../widgets/CreatePostWidget";
import PostsWidget from "../../widgets/PostsWidget";

function Home() {
  // const user = useSelector((state) => state.user);
  // const userId = user._id;

  return (
    <Box>
      <NavBar />
      <Stack
        direction="row"
        divider={<Divider orientation="vertical"/>}
        justifyContent="space-between"
      >
        <LeftBar />
        {/* <CreatePostWidget /> */}
        <PostsWidget />
        <RightBar />
      </Stack>
      <BottomNav />
    </Box>
  );
}

export default Home;
