'use client';

import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');

  return (
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
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
  );
}
