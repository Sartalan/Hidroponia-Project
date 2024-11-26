import '../../styles/routes_styles/start.home.css'
import '../../styles/routes_styles/general.routes.styles.css'

export function StartHome () {
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
          <input className="ip-text-input" type="text" id="name" placeholder="192.168.77.139:5000" name="name" required minlength="4" maxlength="20" size="14" />
          <input className='ip-btn' type="button" value="Submit"/>
        </div>
      </div>
      </>
      
    )
  }