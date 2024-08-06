
import { useRef } from 'react';
import "../styles/header.css";
import { GiHamburgerMenu } from "react-icons/gi";




const Header = () =>{
  const menuRef = useRef(null);
 
const toggleMenu = () =>{
  menuRef.current.classList.toggle("show")
}   

    return (
      <nav className="navbar" >
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Kanika Arora
        </a>
        <div className='navbar-menu' ref={menuRef}>
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About</a>
          <a href="/services" className="navbar-item">Services</a>
          <a href="/contact" className="navbar-item">Contact</a>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    
    )
 }
 
 export default Header;