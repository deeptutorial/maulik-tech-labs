import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popup from "reactjs-popup"


const Header = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                    
                    <Popup
                        trigger={<IconButton />}
                        position="right top"
                        on="click"
                        closeOnDocumentClick
                       >
                        <div className="menu">
                            <div className="menu-item"> Home</div>
                            <div className="menu-item"> About</div>
                            <div className="menu-item"> Blog</div>        
                            <div className="menu-item"> Contact</div>
                        </div>
                    </Popup>
                    
                            
                <Typography variant="headline" color="inherit" component="h1" textAlign='center' flex= '1 0 auto'>
                 Maulik Tech Labs
                </Typography>

            </Toolbar>
        </AppBar>
        </div>
    )
}


export default Header;