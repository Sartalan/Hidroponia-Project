import '../../assets/styles/routes_styles/start.home.css'
import '../../assets/styles/routes_styles/general.routes.styles.css'

export function StartHome () {
    return (

      <>
      <div className="loader-content">
        <div className="text-loader-container">
          <p title='A project by...' className='start-home-text'>A project by<span>...</span></p>
        </div>
        <div className="spectrum-loader-content">
          <p title='Spectrum.' className='spectrum-text'>Spectrum.</p>
        </div>
      </div>
      </>
      
    )
  }