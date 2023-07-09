import { Box, Typography } from "@mui/material";
import Flexbetween from "../components/Flexbetween";
import WidgetWrapper from "../components/WidgetWrapper";
import logo from "../assets/Ad.jpg";


const AdvertWidget = () => {


  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }} position="fixed" border="1px solid black" borderRadius="10px" m="0.4rem" mr="1rem">
      <WidgetWrapper>
        <Flexbetween>
          <Typography variant="h5" fontWeight="500" fontFamily="serif">
            Sponsored
          </Typography>
          <Typography fontFamily="serif" variant="h5">Create Ad</Typography>
        </Flexbetween>
        <img width="100%" height="auto" alt="Ad" src={logo}
          style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        />
        <Flexbetween>
          <Typography fontFamily="serif">Graphic Design</Typography>
          <Typography fontFamily="serif">www.demo.com</Typography>
        </Flexbetween>
        <Typography m="0.5rem 0" fontFamily="serif">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
        </Typography>
      </WidgetWrapper>
    </Box>
  );
};

export default AdvertWidget;
