
import '../../assets/styles/routes_styles/home.css'

import '../../assets/styles/routes_styles/general.routes.styles.css'

import React, { useEffect, useState } from 'react';


export function Home () {

    const [socket, setSocket] = useState(null);
    
    console.log("LOL")
    useEffect(() => {
      const newSocket = new WebSocket('ws://localhost:5000');  // Reemplaza con tu URL y puerto
      setSocket(newSocket);
  
      newSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Actualiza el estado del componente con los datos recibidos
      };
  
      // Limpieza al desmontar el componente
      return () => {
        newSocket.close();
      };
    }, []); 

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
