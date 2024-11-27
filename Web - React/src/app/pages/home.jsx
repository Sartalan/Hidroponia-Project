
import '../../styles/routes_styles/home.css'
import '../../styles/routes_styles/general.routes.styles.css'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export function Home () {

    const [data, setData] = useState('')
    const [pokemon, setPokemon] = useState('')

    const storeIp = useSelector((state) => state.ipData.value);
    useEffect(() => {
      setData(storeIp)
      fetch(data)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.name)
        setPokemon(response.name)
      })
    },[data, storeIp])
  

    return (
    
      <div className="contentHome">
        <div className="box roomOne">
          <p className='text'>{data}</p>
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
