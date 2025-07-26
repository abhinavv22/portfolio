import './Navbar.css';
import React, { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../assets/logo_astro1.png';
import underlines from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpened, setMenuOpened] = useState(false); // track if menu is open
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setMenuOpened(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    setMenuOpened(false);
  };

  useEffect(() => {
    // Prevent scroll when menu is open
    if (menuOpened) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
  }, [menuOpened]);

  return (
    <>
      <div className='navbar'>
        <img className='img-logo' src={logo} alt="Logo" />
        {!menuOpened && (
  <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
)}

        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
          <li>
            <AnchorLink className='anchor-link' href='#home'>
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" && <img src={underlines} alt="underline" />}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#about'>
              <p onClick={() => setMenu("about")}>About me</p>
            </AnchorLink>
            {menu === "about" && <img src={underlines} alt="underline" />}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
            {menu === "contact" && <img src={underlines} alt="underline" />}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#myprojects'>
              <p onClick={() => setMenu("myprojects")}>Projects</p>
            </AnchorLink>
            {menu === "myprojects" && <img src={underlines} alt="underline" />}
          </li>
          <li>
            <AnchorLink className='anchor-link' offset={50} href='#mywork'>
              <p onClick={() => setMenu("mywork")}>Work</p>
            </AnchorLink>
            {menu === "mywork" && <img src={underlines} alt="underline" />}
          </li>
        </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
        </div>
      </div>

      {/* Blur Background Overlay */}
      {menuOpened && <div className="nav-blur-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
