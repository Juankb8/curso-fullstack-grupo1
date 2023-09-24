import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (<div className='NavBar' >
  <h3 style={{marginRight:'200px'}}>Listado de componentes:</h3>
        <Link className='botonLink' to='/compbanner' >Banner </Link>
        <Link className='botonLink' to='/compfuncion' >Funcion </Link>
        <Link className='botonLink' to='/compimage' >Imagen </Link>
        <Link className='botonLink' to='/compsound' >Sonido </Link>
        <Link className='botonLink' to='/compvideo' >Video </Link>
        <Link className='botonLink' to='/complistatemas' >Componente Lista Temas</Link>
        
        </div>
  )
}