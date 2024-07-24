import React from 'react';
import { NavLink } from 'react-router-dom';
 import './App.css';
const Navbar = ()=>{
    return(
        <>
     <nav className="navbar navbar-expand-lg  py-4 pt-lg-4">
  <div className="container">
    <NavLink  className="navbar-brand" to="/">Savan Naik</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=" nav-font fa-solid fa-bars"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
                <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/about">about</NavLink>
        </li>
         <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/services">services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link active" aria-current="page" to="/contact">contact</NavLink>
        </li>
       </ul>
    </div>
  </div>
</nav>
        </>
    )
};
export default Navbar;
