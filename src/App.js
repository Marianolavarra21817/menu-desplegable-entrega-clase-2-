import './App.css';
import { BrowserRouter as Router, Swict, route  } from 'react-router-dom';
import NavBar from "./Components/Navegacion/NavBar";
import Inicio from './Components/Paginas/Inicio';
import Coach from './Components/Paginas/Coach';
import Items from './Components/Paginas/Items';

 function App() {

  return (
    <div className='App'>;  
    <>
    <Router>
      <NavBar/>
    </Router>
  </>
    </div>
    )
  };


export default App;
