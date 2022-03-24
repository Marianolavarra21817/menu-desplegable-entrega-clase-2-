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
      <switch>
        <route path='/' exact component={Inicio}/>
        <route path='/Coach' exact component={Coach}/>
        <route path='/Items' exact component={Items}/>
      </switch>
    </Router>
    </>
    </div>
    )
  };


export default App;
