{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}

import '../../styles/navInside.css';


import {Routes, Route, Link } from 'react-router-dom'

//? Routes Images
import Route1 from '/icons/nav_icons/home.svg'
import Route2 from '/icons/nav_icons/robot.svg'
import Route3 from '/icons/nav_icons/control.svg'
import Route4 from '/icons/nav_icons/status.svg'
import Route5 from '/icons/nav_icons/about_us.svg'
import Route6 from '/icons/nav_icons/config.svg'


//? Routes Components
import {StartHome} from '../pages/starthome'
import {Home} from '../pages/home'
import {Control} from '../pages/control'
import {Robot} from '../pages/robot'
import {Test} from '../pages/test'

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>
  
      <Link className='inside-component' to='/Hidroponia/home'>
          <img className='icon-component' src={Route1} alt="#"/>
      </Link>

      <Link className='inside-component' to='/Hidroponia/robot'>
          <img className='icon-component' src={Route2} alt="#"/>
      </Link>

      
      <Link className='inside-component' to='/Hidroponia/control'>
          <img className='icon-component' src={Route3} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/Hidroponia/status'>
          <img className='icon-component' src={Route4} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/Hidroponia/about'>
          <img className='icon-component' src={Route5} alt="#"/>
      </Link>
     
      <Link className='inside-component' to='/Hidroponia/config'>
          <img className='icon-component' src={Route6} alt="#"/>
      </Link>   

      <Link className='inside-component' to='/Hidroponia/test'>
          <img className='icon-component' src="#" alt="#"/>
      </Link>   
      
    </ul>

    </>
 )
} 

export function Status () {
  return (
    <h1>SOY STATUS</h1>
  )
}

export function About () {
  return (
    <h1>SOY ABOUT</h1>
  )
}

export function Config () {
  return (
    <h1>SOY LA CONFIGURACIÓN</h1>
  )
}

export function Haupt(){
    return (
      <main className='main'>
        <Routes>
          <Route path='/Hidroponia/' element={<StartHome/>}/>
          <Route path='/Hidroponia/home' element={<Home/>}/>
          <Route path='/Hidroponia/status' element={<Status/>}/>
          <Route path='/Hidroponia/about' element={<About/>}/>
          <Route path='/Hidroponia/robot' element={<Robot/>}/>
          <Route path='/Hidroponia/config' element={<Config/>}/>
          <Route path='/Hidroponia/control' element={<Control/>}/>
          <Route path='/Hidroponia/test' element={<Test/>}/>
        </Routes>
      </main>
    )
  }
