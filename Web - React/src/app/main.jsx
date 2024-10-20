import './main.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Nav} from "./nav/nav"
import {Haupt} from './nav/navInside'
import store from '../store';

const root = ReactDOM.createRoot(document.getElementById('root'))
  
  root.render(
    <Provider store={store}>
        <BrowserRouter>  
            <Nav>
                
            </Nav>


            <Haupt>

            </Haupt>

        </BrowserRouter>
    </Provider>,
  )


