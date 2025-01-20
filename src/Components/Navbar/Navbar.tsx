import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo 2.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png"

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{

      window.addEventListener('scroll',()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })

    },[]);


    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true)
    }

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu?'': 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="researchers" smooth={true} offset={-260} duration={500}>
            Researchers
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to=""
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Log In
          </Link>
        </li>
      </ul>
      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
