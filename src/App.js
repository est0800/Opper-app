import React, {useState} from 'react';
import PropTypes from 'prop-types';
import App from '../App';
import '../App.css'
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
                    <Button variant='outlined' color='inherit' style={{marginRight:'5px'}}>
                        Iniciar sesion
                    </Button>
                    <Button variant='outlined' color='inherit'>
                        Registrarse
                    </Button>
                    </div>
                </ToolBar>
            </AppBar>

            <Drawer 
            anchor='left'
            open={open}
            onClose={SetClose}
            >
                <div className="nav-container">
                
                
                </div>
            </Drawer>
        </div>
    )
}

export default AppBarL;
