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
import { Container } from '@material-ui/core';
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

function AppBarL(){
    const [open, SetOpen] = useState(false)
    const handleDrawer = () => {
        SetOpen(true)
    }

    const SetClose = () => {
        SetOpen(false)
    }
    return(
        <div>
            <AppBar position='static'>
                <ToolBar>
                    <IconButton onClick={handleDrawer} color="inherit" edge='start' aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow:1, alignSelf:'flex'}}>
                        Opper
                    </Typography>
                    <div className="log-container">
                   
                    <IconButton color='inherit'>
                        <AccountCircleIcon/>
                    </IconButton>
                    <IconButton  color='inherit' style={{marginRight:'5px'}}>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton  color='inherit' style={{marginRight:'5px'}}>
                        <NotificationsIcon/>
                    </IconButton>
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
                    <Button>
                    <BookmarkIcon style={{color:'gray'}}/>
                    <h5>Publicaciones que te gustaron</h5>
                    </Button>
                    </li>

                    <li>
                    <Button>
                    <CalendarTodayIcon style={{color:'gray'}} />
                    <h5>Mis eventos</h5>
                    </Button>
                    </li>

                    <li>
                    <Button>
                    <BuildIcon style={{color:'gray'}}/>
                    <h5>Herramientas de trabajo</h5>
                    </Button>
                    </li>

                    <li>
                    <Button>
                    <ShoppingCartIcon style={{color:'gray'}}/>
                    <h5>Opper premiun</h5>
                    </Button>
                    </li>

                    
                    

                    <li>
                    <Button>
                    <FolderIcon style={{color:'gray'}}/>
                    <h5>Almacenamiento</h5>
                    </Button>
                    </li>

                    <li>
                    <Button>
                    <SearchIcon style={{color:'gray'}}/>
                    <h5>Buscar publicaciones</h5>
                    </Button>
                    </li>

                    <li>
                    <Button>
                    <SettingsIcon style={{color:'gray'}}/>
                    <h5>Configuracion</h5>
                    </Button>
                    </li>

                    
                    <li>
                    <Button>
                    <HelpIcon style={{color:'gray'}}/>
                    <h5>Ayuda</h5>
                    </Button>
                    </li>

                </div>
            </Drawer>
        </div>
    )
}

export default AppBarL;
