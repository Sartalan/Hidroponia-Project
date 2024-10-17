import '../../assets/styles/routes_styles/control.css'
import '../../assets/styles/routes_styles/general.routes.styles.css'

import Up from '/icons/control_icons/up.svg'
import Down from '/icons/control_icons/down.svg'
import Left from '/icons/control_icons/left.svg'
import Right from '/icons/control_icons/right.svg'

export function Control() {

    let estado = false
    let senalEnviada = false


    window.addEventListener("keydown", function (event) {


        let letra = (event.code)

        switch (letra) {
            default:

                estado = false
                senalEnviada = false

                break;

            //!--------------IZQUIERDA---------------

            case 'KeyA':
                estado = true;

                if (estado && !senalEnviada) {
                    console.log('Left')
                    senalEnviada = 1;
                }

                break;

            //!--------------DERECHA---------------

            case 'KeyD':
                estado = true;
                if (estado && !senalEnviada) {
                    console.log('Right')
                    senalEnviada = true;
                }

                break;

            //!--------------ABAJO---------------

            case 'KeyS':
                estado = true;
                if (estado && !senalEnviada) {      
                    console.log('Down')
                    senalEnviada = true;
                }

                break;

            //!--------------ARRIBA---------------

            case 'KeyW':
                estado = true;
                if (estado && !senalEnviada) {
                    console.log('Up')
                    senalEnviada = true;
                }
                break;
        }
    })

    //SÍ TOCA LA TECLA        ↑ <=

    //SÍ SUELTA LA TECLA      => ↓


    window.addEventListener("keyup", function (event) {

        let letra = (event.code)

    switch (letra) {


          //!--------------MENOS_IZQUIERDA---------------

        case 'KeyA':

          console.log('Null [A]')
  
          estado=0
          senalEnviada=0

      break;
              
          //!--------------MENOSDERECHA---------------

        case 'KeyD':

          console.log('Null [D]')

          estado=0
          senalEnviada=0

      break;
              
          //!--------------MENOSABAJO---------------
      
          case 'KeyS':

            console.log('Null [S]')
            estado=0
            senalEnviada=0

        break;
              
          //!--------------MENOSARRIBA---------------

          case 'KeyW':

            console.log('Null [W]')
            estado=0
            senalEnviada=0

        break;               
          }

      })


    return (
        <>
            <div className="side-speed-bar">
                <div className="one speed-elements-in">1</div>
                <div className="two speed-elements-in">2</div>
                <div className="three speed-elements-in">3</div>
            </div>

            <div className="control-container">

                <div className="controller-box">

                    <div className="center"></div>

                    <div className="left controller-btn">
                        <img className="arrow-in arrow-left" src={Left} alt="" />
                    </div>

                    <div className="right controller-btn">
                        <img className="arrow-in arrow-right" src={Right} alt="" />
                    </div>

                    <div className="down controller-btn">
                        <img className="arrow-in arrow-down" src={Down} alt="" />
                    </div>

                    <div className="up controller-btn">
                        <img className="arrow-in arrow-up" src={Up} alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}


