import React from 'react';
import logo from '../photos/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='fixed-top' style={{userSelect:"none"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <a className="navbar-brand" href="#"><img src={logo} alt="Logo" className="logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link fs-3 ms-3">Anasayfa</Link>
              </li>
              <li className="nav-item">
                <Link to="/portfolio" className="nav-link fs-3 ms-3">Portfolyo</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link fs-3 ms-3">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
