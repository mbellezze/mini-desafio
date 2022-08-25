import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {NavBar} from '../components/Navbar';

import { TablaContainer } from "../screens/TablaContainer/TablaContainer.jsx";
import { FormContainer } from '../screens/FormContanier/FormContainer';


export const Rutas = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<TablaContainer />} />
                <Route exact path="/formulario" element={<FormContainer />} />
            </Routes>
        </BrowserRouter>
    );
}