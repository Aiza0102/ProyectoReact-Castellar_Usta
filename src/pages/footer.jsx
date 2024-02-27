import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container2">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 h6">
            <span className="font-weight-bold">Isaac Castellar - Aiza | 2023 </span>💻<br />
            </p>
            <p className="mb-0 h6">
            Todos los derechos reservados ©️
            </p><br />
            <p className="mb-0 h6">
              Diseñado con <FaHeart className="text-danger" /> para <a
                href="https://www.coderhouse.com.co/"
                className="text-light text-decoration-none"><u>Coderhouse</u></a>
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <ul className="list-inline social-icons">
              <li className="list-inline-item me-3">
                <a href="https://www.facebook.com/ICastellar.U" className="text-light text-decoration-none">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://www.instagram.com/i_castellar01" className="text-light text-decoration-none">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://twitter.com/Aiza0102" className="text-light text-decoration-none">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://wa.link/gwnstc" className="text-light text-decoration-none">
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;