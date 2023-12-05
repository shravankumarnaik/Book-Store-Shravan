import { Box, Typography } from "@mui/material";

const About = () => {
    return ( 
        <div className="about">
            <Box display='flex' flexDirection='column' alignItems='center'>
                 <Typography sx={{fontFamily:"fantasy"}} variant="h2" >Book Store Management</Typography>
                 <Typography variant="h3" >By "Shravan_Kumar" Mern Stack</Typography>
            </Box>
        </div>
     );
}
 
export default About;