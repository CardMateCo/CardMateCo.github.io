import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" style={{ marginTop: '4rem', paddingTop: '2rem' }}>
            <nav className="footer-nav">
                <Link to="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
                <Link to="/faq" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>FAQ</Link>
                <Link to="/privacy" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link to="/terms" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Terms of Use</Link>
            </nav>
            <p>&copy; {new Date().getFullYear()} Beermate. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
