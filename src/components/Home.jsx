import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
           <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
            <Button LinkComponent={Link} to="/books" sx={{marginTop:15, backgroundColor:"orangered"}} variant="contained">
                <Typography variant="h3">View All Products</Typography>
            </Button>
           </Box>
        </div>
     );
}
 
export default Home;