import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="inicio">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="Crear-articulos">Crear artículos</NavLink>
                </li>
                <li>
                    <NavLink to="gestion-usuarios">Gestión usuarios</NavLink>
                </li>
                <li>
                    <NavLink to="acerca-de">Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/*Aqui quiero cargar los componentes de las rutas anidadas*/} 
            <Outlet />

        </div>
    </div>
  )
}
