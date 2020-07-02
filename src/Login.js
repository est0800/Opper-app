import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './App.css'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Container, ListItemIcon } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BuildIcon from '@material-ui/icons/Build';
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FolderIcon from '@material-ui/icons/Folder';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import Accordion from '@material-ui/core/Accordion';
import AccordionSumary from '@material-ui/core/AccordionSummary'
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import MailIcon from '@material-ui/icons/Mail';



const StyledMenu = withStyles({
    paper: {
        border: '1px solid  #d3d4d5',

    },
})((props) => (
    <Menu 
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
    }}

    transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
    }}
    {...props}
    
    />
));







function AppBarL(){
    const [open, SetOpen] = useState(false)
    const handleDrawer = () => {
        SetOpen(true)
    }

    const SetClose = () => {
        SetOpen(false)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }



    
    return(
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <IconButton onClick={handleDrawer} color="inherit" edge='start' aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow:1, alignSelf:'flex', fontFamily:'MuseoModerno, cursive'}}>
                    <style>
@import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&family=MuseoModerno&family=Pacifico&family=Roboto:ital,wght@0,100;0,500;1,400&display=swap');
</style>
                        
                        Opper
                    </Typography>
                    <div className="log-container">
                   
                    <IconButton onClick={handleClick} color='inherit'>
                        <AccountCircleIcon/>
                    </IconButton>
                    <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >

                        <Button>
                        <AddCircleIcon style={{color:'gray'}} fontSize="small"/>
                        <h5 style={{color:'gray'}}>Añadir cuenta</h5>
                        </Button>
                        
                        

                    </StyledMenu>
                    
                    
                    </div>
                </ToolBar>
            </AppBar>

            <Drawer 
            anchor='left'
            open={open}
            onClose={SetClose}
            >
                <div className="nav-container">
                    
                    <li>
                    <Button onClick={handleClick}>
                    <EmailIcon style={{color:'gray'}}/>
                    <h5>Soporte</h5>
                    </Button>
                    </li>
                    <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    >

                        <Button>
                        <MailIcon style={{color:'gray'}} fontSize="small"/>
                        <h5 style={{color:'gray'}}>opperdesing@gmail.com</h5>
                        </Button>
                        
                        

                    </StyledMenu>
                    

                </div>
            </Drawer>
            
                
                <Typography variant="h1" style={{color:'white', fontFamily:'Pacifico, cursive', marginTop:200, textAlign:'center'}}>
                <style>
@import url('https://fonts.googleapis.com/css2?family=Holtwood+One+SC&family=MuseoModerno&family=Pacifico&family=Raleway&family=Roboto:ital,wght@0,100;0,500;1,400&display=swap');
</style>
              Somos  Opper
                </Typography>
        </div>
    )
}

export default AppBarL;
