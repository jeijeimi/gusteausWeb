'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Close menu when clicking a link
    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    const links = document.querySelectorAll('.mobile-menu-link');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home" style={{ padding: '10px 0' }}>
            <img
              src="/assets/img/recursos/logoEntero.svg"
              alt="Gusteau's"
              className="d-none d-md-block"
              style={{ height: '70px' }}
            />
            <img
              src="/assets/img/recursos/logoSimplificado.svg"
              alt="Gusteau's"
              className="d-block d-md-none"
              style={{ height: '60px' }}
            />
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  href="#home"
                  onClick={() => setActiveLink('home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'quienes-somos' ? 'active' : ''}`}
                  href="#quienes-somos"
                  onClick={() => setActiveLink('quienes-somos')}
                >
                  Quiénes somos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'productos' ? 'active' : ''}`}
                  href="#productos"
                  onClick={() => setActiveLink('productos')}
                >
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'galeria' ? 'active' : ''}`}
                  href="#galeria"
                  onClick={() => setActiveLink('galeria')}
                >
                  Galería
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === 'contacto' ? 'active' : ''}`}
                  href="#contacto"
                  onClick={() => setActiveLink('contacto')}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="mobile-menu-close"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <ul className="mobile-menu-nav">
          <li className="mobile-menu-item">
            <a
              className={`mobile-menu-link ${activeLink === 'home' ? 'active' : ''}`}
              href="#home"
              onClick={() => setActiveLink('home')}
            >
              Home
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              className={`mobile-menu-link ${activeLink === 'quienes-somos' ? 'active' : ''}`}
              href="#quienes-somos"
              onClick={() => setActiveLink('quienes-somos')}
            >
              Quiénes somos
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              className={`mobile-menu-link ${activeLink === 'productos' ? 'active' : ''}`}
              href="#productos"
              onClick={() => setActiveLink('productos')}
            >
              Productos
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              className={`mobile-menu-link ${activeLink === 'galeria' ? 'active' : ''}`}
              href="#galeria"
              onClick={() => setActiveLink('galeria')}
            >
              Galería
            </a>
          </li>
          <li className="mobile-menu-item">
            <a
              className={`mobile-menu-link ${activeLink === 'contacto' ? 'active' : ''}`}
              href="#contacto"
              onClick={() => setActiveLink('contacto')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
