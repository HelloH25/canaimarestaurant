import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Services from '../pages/Services'


const Rutas = () => {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="/Servicio" element={<Services/>} />
                    <Route path="/Menu" element={<Menu />} />
                    </Route>
                </Routes>
        </div>
    )
}

export default Rutas
