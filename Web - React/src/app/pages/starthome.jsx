import '../../styles/routes_styles/start.home.css'
import '../../styles/routes_styles/general.routes.styles.css'
import { useEffect, useState } from 'react';

export function StartHome () {

  const [ip, setIp] = useState('')

  function submitData(){
      console.log("funciono")

//? Almaceno el valor en una constante
      const ip = document.getElementById("ip-data").value;
      //console.log(ip)
      localStorage.setItem("myIp", (ip))
//? Almaceno el dato en el localStorage
      const data = localStorage.getItem("myIp")
      console.log(ip)
//? Dato en useState
      setIp(data)
    }

    useEffect(() => {
      fetch(ip)
      .then((res) => (res.json()))
      .then((res) => {
        console.log(res.name)
      })
    },[ip])

    return (
      <>
      <div className="loader-content">
        <div className="text-loader-container">
          <p title='Bienvenido...' className='start-home-text'>Bienvenido<span>...</span></p>
        </div>
        <div className="spectrum-loader-content">
          <p title='Inserte una IP' className='spectrum-text'>Inserte una IP </p>
        </div>

        <div className="ip-box">
          <input className="ip-text-input" id='ip-data' type="text" placeholder="192.168.77.139:5000" name="name" required minLength="4"  size="14" />
          <input className='ip-btn' type="button" value="Submit" onClick={submitData}/>
        </div>
      </div>
      </>
    )
  }