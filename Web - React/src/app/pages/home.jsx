
import '../../styles/routes_styles/home.css'

import '../../styles/routes_styles/general.routes.styles.css'

import React, { useEffect, useState } from 'react';




export function Home () {

    useEffect(() => {
      fetch("http://192.168.50.107:5000/Hidroponia")
      .then((res) => res)
      .then((response) => {
        console.log(response)
      })
    },[])
  

    return (
    
      <div className="contentHome">
        <div className="box roomOne">
          <p className='text'>Kitchen</p>
        </div>

        <div className="box roomTwo">
          <p className='text'>Living Room</p>
        </div>

        <div className="box roomThree">
          <p className='text'>Bedroom</p>
        </div>
      </div>
    )
  }
