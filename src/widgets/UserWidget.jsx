/* eslint-disable react-hooks/exhaustive-deps */
import {
    AccountCircle,
    EmailOutlined,
    FemaleOutlined,
    LocationOnOutlined, MaleOutlined,
    ManageAccountsOutlined,
    Person2Outlined,
    PhoneAndroidOutlined, RouteRounded, SchoolOutlined, TransgenderOutlined
} from '@mui/icons-material';
import { Box, Divider, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Flexbetween from '../components/Flexbetween';
import NavBar from '../components/NavBar';
import UserImage from "../components/UserImage";
import WidgetWrapper from "../components/WidgetWrapper";

function UserWidget() {

    const user = useSelector((state) => state.user);
    const isNonMobile = useMediaQuery("(max-width: 800px)");

    if (!user) return null;

    const userName = user.userName;
    const name = user.fName + " " + user.lName;
    console.log(user);

    return (
        <>
            <NavBar />
            <Box display="flex" justifyContent="center" my="4rem" mx={isNonMobile && "1rem"}>
                <WidgetWrapper width={!isNonMobile ? "40%" : "100%"} border="1px solid black" boxShadow="0 25px 50px -12px rgb(2 6 23)">
                    <Flexbetween
                        gap="0.5rem"
                        pb="1.1rem">
                        <Flexbetween gap="1rem" sx={{ cursor: "pointer" }}>
                            <UserImage image={user._id} size={60} dpZoom />
                            <Box>
                                <Typography variant='h5' fontWeight="500" fontFamily="serif">{name}</Typography>
                                <Typography variant='h5' fontWeight="500" fontFamily="serif">{userName}</Typography>
                            </Box>
                        </Flexbetween>
                        <Tooltip title="Edit coming soon">
                            <IconButton>
                                <ManageAccountsOutlined />
                            </IconButton>
                        </Tooltip>
                    </Flexbetween>

                    <Divider />

                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <EmailOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif" flexWrap="wrap">{user.email.length >= 20 && isNonMobile && user.email.slice(0, 21) || user.email}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <PhoneAndroidOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.phone}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem">
                            <AccountCircle fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.role === 1 ? "Student" : "Teacher"}</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <LocationOnOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.pinCode}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            {user.gender.toUpperCase() === "MALE" ? <MaleOutlined fontSize='medium' />
                                : user.gender.toUpperCase() === "FEMALE" ? <FemaleOutlined fontSize='medium' /> : <TransgenderOutlined fontSize='medium' />}
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.gender}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <RouteRounded fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{new Date(user.dateOfBirth).toLocaleDateString()}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem">
                            <Person2Outlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.about}</Typography>
                        </Box>
                    </Box>

                    <Divider />

                    <Box p="1rem 0">
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.institutionName}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.institutionType === "0" ? "School" :
                                user.institutionType === "1" ? "College" : "University"}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.degree}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.discipline}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.specialization}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="1rem">
                            <SchoolOutlined fontSize='medium' />
                            <Typography variant='h6' fontWeight="500" fontFamily="serif">{user.standard}</Typography>
                        </Box>
                    </Box>

                </WidgetWrapper>
            </Box>
        </>
    )
}

export default UserWidget