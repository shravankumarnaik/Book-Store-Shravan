import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    return ( 
        <div className="header">
            <AppBar sx={{backgroundColor:"#232f3D"}} position="sticky">
                <Toolbar>
                    <NavLink to="/" style={{color:"white" , textDecoration:"none"}} >
                <Typography>V_D Book_Store</Typography></NavLink>
            <Tabs sx={{ml:'auto'}} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                    <Tab LinkComponent={NavLink} to="/books" label="Books" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                </Tabs>
                </Toolbar>
            </AppBar>
        </div>
     );
}
 
export default Header;