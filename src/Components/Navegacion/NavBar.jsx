import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
  return (
  <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
   
        <img  src="./INNOVAC.jpg" width='200' ></img>
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav mx-auto">
      <Link class="nav-link" to ='/'> Inicio </Link>
      <Link class="nav-link" to='/Coach'> Coach</Link>
      <Link class="nav-link" to='/Items' > Items</Link>
  
    </div>
  </div>
</nav>
</>   
  )
  
}

export default NavBar