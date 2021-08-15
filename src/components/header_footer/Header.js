import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState } from 'react';
import SideDrawer from './SideDrawer';


function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    }



    return (
        <AppBar position="sticky" style={{
            backgroundColor: '#49b6ff',
            boxShadow: 'none',
            padding: '10px 0px'
        }}>
            <Toolbar>
                <IconButton  className="app"
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => toggleDrawer(true)}
                    >
                    <MenuIcon style={{ fontSize: '2.5rem' }} />
                </IconButton>
                <div className="header_logo">
                    <div className="header_logo_venue">محسن چاووشی</div>
                </div>
               
                <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
            </Toolbar>
        </AppBar>
    )
} 

export default Header;
