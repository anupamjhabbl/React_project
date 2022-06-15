//import logo from './logo.svg';
import './Navbar.css';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Navbar(props) {

  let modevalue=0;
  let modevalue2="dark";
  
  
  if (props.mode){
    modevalue="navbar navbar-expand-lg navbar-dark bg-dark";
    modevalue2="light"
    
  }
  else{
    modevalue="navbar navbar-expand-lg navbar-light bg-light";
    
    
  }

  

  
  return (
    <div>
        <nav className={`${modevalue} ${props.mystyle}`} >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <div className="theme">
                  <button type="button" className="Red circle " id="Red" onClick={props.red}></button>
                  <button type="button" className="Blue circle" id="Blue" onClick={props.blue}></button>
                  <button type="button" className="Green circle" id="Green" onClick={props.green}></button>
                  <button type="button" className="Yellow circle" id="Yellow" onClick={props.yellow}></button>
                  <button type="button" className="White circle" id="White" onClick={props.white}></button>
                  <button type="button" className="Black circle" id="Black" onClick={props.black}></button>
                </div>
                
                
              </form>
            </div>
          </div>
        </nav>
    </div>
      
  );
}

Navbar.propTypes={
  title:PropTypes.string.isRequired,
  name:PropTypes.string
}

Navbar.defaultProps = {
  title:"anupam",
  name:"patanahi"
};

export default Navbar;