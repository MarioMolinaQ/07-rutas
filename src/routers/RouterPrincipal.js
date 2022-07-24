import React from 'react'
import {Routes, Route, NavLink, BrowserRouter, Navigate} from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { InicioPanel } from '../components/panel/inicio';
import { Crear } from '../components/panel/Crear';
import { Gestion } from '../components/panel/gestion';
import { Acerca } from '../components/panel/Acerca';
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    
    <nav>
        <ul>
            <li>
                <NavLink to="/inicio"
                         className={({isActive}) => isActive ? "activado" : ""}
                         >Inicio</NavLink>
            </li>
            <li>
                <NavLink to="/articulos"
                        className={({isActive}) => isActive ? "activado" : ""}
                        >Artículos</NavLink>
            </li>
            <li>
                <NavLink to="/contacto"
                        className={({isActive}) => isActive ? "activado" : ""}
                        >Contacto</NavLink>
            </li>
            <li>
                <NavLink to="/panel"
                        className={({isActive}) => isActive ? "activado" : ""}
                        >Panel de control</NavLink>
            </li>
        </ul>
    </nav>

    <section className='contenido-principal'>
        <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/articulos" element={<Articulos />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/persona" element={<Persona />}/>
            <Route path="/persona/:nombre" element={<Persona />}/>
            <Route path="/persona/:nombre/:apellido" element={<Persona />}/>
            <Route path="/redirigir" element={<Navigate to="/persona/mario/pruebas" />}/>
            
            <Route path="/panel/*" element={<PanelControl />}>
                <Route index element={<InicioPanel/>} />
                <Route path="inicio" element={<InicioPanel/>} />
                <Route path="crear-articulos" element={<Crear/>} />
                <Route path="gestion-usuarios" element={<Gestion />} />
                <Route path="acerca-de" element={<Acerca/>} />
            </Route>

            <Route path="*" element={<Error />}/>
        </Routes>
    </section>
    </BrowserRouter>
  )
}
