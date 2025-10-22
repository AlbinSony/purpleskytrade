import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';


const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);


    return (
        <header id="header" className={isSticky ? 'sticky' : ''}>
            <div className="container">
                <div className="navbar">
                    <h2 className="nav_logo">
                        <Link to="/">Priple Sky Trade</Link>
                    </h2>
                    <nav className="nav_actions">
                        <div className="nav_links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
                            <Link to="/products" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Products</Link>
                            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>About Us</Link>
                            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
                        </div>
                        <div className="contact_info" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginLeft: '2rem' }}>
                            <a href="tel:+19038940149" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                                <FiPhone size={18} />
                                <span style={{ fontSize: '14px' }}>+1 (903) 894-0149</span>
                            </a>
                            <a href="mailto:Greenbeelife@mail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'inherit', textDecoration: 'none' }}>
                                <FiMail size={18} />
                                <span style={{ fontSize: '14px' }}>Greenbeelife@mail.com</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;