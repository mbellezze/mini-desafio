import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import "./style.css";


export const NavBar = () => {
    

    return (<>
        <AppBar>
            <Toolbar >
                <Link to={`/`} className="tool-style" >DATOS TABLA</Link>
                <Link to={`/formulario`} className="tool-style">FORMULARIO</Link>
            </Toolbar>
        </AppBar>
    </>);
}