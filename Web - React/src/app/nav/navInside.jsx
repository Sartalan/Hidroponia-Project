{
  /*
    Componentes Internos de la Barra de Navegación Interna 
    que corresponderán a la movilidad de cada uno de los MiniBots
  */
}

import '../../assets/styles/navInside.css';


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

export function Inside(){
 return (
  <>
    <ul className='inside-nav'>
  
      <Link className='inside-component' to='/Spectrum-IOT_WebPage/home-page'>
          <img className='icon-component' src={Route1} alt="#"/>
      </Link>

      <Link className='inside-component' to='/Spectrum-IOT_WebPage/robot-page'>
          <img className='icon-component' src={Route2} alt="#"/>
      </Link>

      
      <Link className='inside-component' to='/Spectrum-IOT_WebPage/control-page'>
          <img className='icon-component' src={Route3} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/Spectrum-IOT_WebPage/status-page'>
          <img className='icon-component' src={Route4} alt="#"/>
      </Link>
      
      <Link className='inside-component' to='/Spectrum-IOT_WebPage/about-page'>
          <img className='icon-component' src={Route5} alt="#"/>
      </Link>
     
      <Link className='inside-component' to='/Spectrum-IOT_WebPage/config-page'>
          <img className='icon-component' src={Route6} alt="#"/>
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
          <Route path='/Spectrum-IOT_WebPage/' element={<StartHome/>}/>
          <Route path='/Spectrum-IOT_WebPage/home-page' element={<Home/>}/>
          <Route path='/Spectrum-IOT_WebPage/status-page' element={<Status/>}/>
          <Route path='/Spectrum-IOT_WebPage/about-page' element={<About/>}/>
          <Route path='/Spectrum-IOT_WebPage/robot-page' element={<Robot/>}/>
          <Route path='/Spectrum-IOT_WebPage/config-page' element={<Config/>}/>
          <Route path='/Spectrum-IOT_WebPage/control-page' element={<Control/>}/>
        </Routes>
      </main>
    )
  }
