import React from 'react';
import './footerComponent.css';
import logo from './Asset/Fusion-Inc-logo.jpg'; // Remplacez par le chemin de votre logo
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

function FooterComponent() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p>Fusion-Photo est une agence créative spécialisée dans la production Vidéo/photo et CGI.</p>
            </div>
            <div className="footer-section">
                <h4>CONTACTEZ NOUS</h4>
                <p>chiftinc54@gmail.com</p>
                <p>Bandalungwa, RDC</p>
                <p>Beni Basuala</p>
                <p>+243 975 657 927</p>
            </div>
            <div className="footer-section">
                <h4>PLUS SUR</h4>
                <div className="footer-socials">
                    {/* <FaFacebookF className="social-icon" /> */}
                    <FaTwitter className="social-icon" />
                    <FaInstagram className="social-icon" />
                    <a href="https://www.tiktok.com/@fusion.inc?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer"><FaTiktok className="social-icon" /></a>
                </div>
            </div>
            <div className="footer-section">
                <h4>DEVElOPEUR</h4>
                <p onCopy={"christiantukunda15@gmail.com"}>christiantukunda15@gmail.com</p>
                <p>Casablanca, Maroc</p>
                <p>Christian Tukunda</p>
                <p>+212 713 088 840</p>
            </div>
        </footer>
    );
}

export default FooterComponent;
