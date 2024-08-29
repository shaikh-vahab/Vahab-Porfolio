
import '../css/Navbar.css'
import React, { useEffect } from "react";
import Logo from '../../public/VS-Logo.png'



const Navbar = () => {

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const sideMenu = document.getElementById("sideMenu");
      if (sideMenu && !sideMenu.contains(event.target) && !event.target.matches('.fas-menu')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      const menuItems = sideMenu.querySelectorAll('li');
      menuItems.forEach(item => {
        item.addEventListener('click', closeMenu);
      });
      return () => {
        menuItems.forEach(item => {
          item.removeEventListener('click', closeMenu);
        });
      };
    }
  }, []);

  const openMenu = () => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.style.right = "0";
    }
  };

  const closeMenu = () => {
    const sideMenu = document.getElementById("sideMenu");
    if (sideMenu) {
      sideMenu.style.right = "-200px";
    }
  };

  return (
    <nav className='NavBar'>
      <div className="logo">
        <a href="#home">
          <img src={Logo} alt="LOGO" width={'90px'} />
        </a>
      </div>
      <div className='navLinks'>
        <ul className="Home-ul" id="sideMenu">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <button className="fas-cross" onClick={closeMenu}>✘</button>
        </ul>
        <button className="fas-menu" onClick={openMenu}>☰</button>

      </div>
    </nav>
  );
};

export default Navbar;
