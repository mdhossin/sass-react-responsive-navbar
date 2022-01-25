import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react/cjs/react.development";

import "./Navbar.scss";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  // const menuToggle = () => navMenu.classList.add('show-menu')
  return (
    <header className="header" id="header" ref={headerRef}>
      <nav className="nav container">
        <Link to="#logo" className="nav__logo">
          <i className="bx bxs-watch nav__logo-icon"></i> Rolex
        </Link>

        <div className={"nav__menu " + (menuOpen && "show-menu")} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="#home"
                className="nav__link active-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="#featured"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Featured
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="#products"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="#new"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                New
              </Link>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__btns">
          <i className="bx bx-moon change-theme" id="theme-button"></i>

          <div className="nav__shop" id="cart-shop">
            <i className="bx bx-shopping-bag"></i>
          </div>

          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="bx bx-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
