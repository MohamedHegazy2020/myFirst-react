import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar(factive) {
  console.log(factive.factive);
 return <>
 
 <nav className="navbar navbar-expand-lg px-5 py-4  fixed-top">
  <div className="container">
    <Link className="navbar-brand start-react" to="#">Start react</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="portfolio" onClick={function(e){factive.factive(e.target)}}> Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about" onClick={function(e){factive.factive(e.target)}}>About</Link>
        </li>  <li className="nav-item">
          <Link className="nav-link"to="contact" onClick={function(e){factive.factive(e.target)}}>Contact</Link>
        </li>
      
      
      </ul>
 
    </div>
  </div>
</nav>



 
 
 </>
}
