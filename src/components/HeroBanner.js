import React from "react";
import { Box, Stack, Typography, Button } from '@mui/material'

import Banner from '../assets/images/banner.jpg'

const HeroBanner = () => {
    return(
        <Box sx={{ mt: {lg: '190px', xs: '70px'}, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>

            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' }
            }} mb="23px" mt="30px"> Sweat, Smile <br/> and Repeat </Typography>

            <Typography fontSize="22px" lineHeight="35px" mb={4}> Check out the most effective exercises </Typography>
            
            <Button variant="contained" color="success" href="#exercises" sx={{padding: '10px'}}>
                Explore Exercises
            </Button>

            <Typography fontWeight={600} color="#ff2625" sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' }}}
            fontSize={200}> Exercises </Typography>

            <img src={Banner} alt="banner" className="hero-banner-img" style={{height: '700px',
                borderRadius: '50px'}}/>
        </Box>
    )
}

export default HeroBanner