import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="copyright">
                    <p>Copyright © 2025 | KING'S PIZZA</p>
                </div>
                <div className="legal">
                    <Link to="/LegalesNotices">Mentions légales</Link>
                </div>
                <div className="social-media-icons">
                    <a href="https://www.instagram.com/lamaisondubon_montelimar/" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram de La Maison du Bon" />
                    </a>
                    <a href="https://www.facebook.com/lamaisondubon" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook de La Maison du Bon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
