/* eslint-disable no-unused-vars */
import { Box, Divider, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import BottomNav from "../../components/BottomNav";
import LeftBar from "../../components/LeftBar";
import NavBar from "../../components/NavBar";
import AdvertWidget from "../../widgets/AdvertWidget";
import PostsWidget from "../../widgets/PostsWidget";

function Home() {

  // const user = useSelector((state) => state.user);
  // const userId = user._id;
  const isNonMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Box>
      <NavBar />
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" />}
        justifyContent="space-between" gap="2rem"
      >
        <LeftBar />

        <PostsWidget />

        {!isNonMobile &&
          <Box flexBasis="25%">
            <AdvertWidget />
          </Box>
        }
      </Stack>
      <BottomNav />
    </Box>
  );
}

export default Home;
