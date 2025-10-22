import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';


const Header = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);

    // Close mobile menu when route changes
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
                        <h2 className="nav_logo">
                            <Link to="/">Priple Sky Trade</Link>
                        </h2>
                        
                        {/* Desktop Navigation */}
                        <nav className="nav_actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="nav_links" style={{ display: 'none', '@media (min-width: 1024px)': { display: 'flex' } }}>
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
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
                            </div>

                            {/* Hamburger Menu Button - Mobile Only */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                style={{
                                    display: 'block',
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'inherit',
                                    cursor: 'pointer',
                                    padding: '0.5rem',
                                    fontSize: '24px',
                                    zIndex: 1001
                                }}
                                className="mobile-menu-button"
                            >
                                {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.nav
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '2rem',
                                alignItems: 'center',
                                width: '100%',
                                maxWidth: '400px'
                            }}
                        >
                            {/* Navigation Links */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', width: '100%' }}>
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'Products', path: '/products' },
                                    { name: 'About Us', path: '/about' },
                                    { name: 'Contact', path: '/contact' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.path}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        style={{ width: '100%' }}
                                    >
                                        <Link
                                            to={item.path}
                                            onClick={handleLinkClick}
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                fontSize: '1.5rem',
                                                fontWeight: '600',
                                                display: 'block',
                                                textAlign: 'center',
                                                padding: '0.75rem',
                                                borderRadius: '8px',
                                                transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
                                                e.currentTarget.style.color = '#f59e0b';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = 'white';
                                            }}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Divider */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6 }}
                                style={{
                                    width: '100%',
                                    height: '1px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    margin: '1rem 0'
                                }}
                            />

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <a
                                    href="tel:+19038940149"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '50px',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        transition: 'all 0.3s ease',
                                        width: 'fit-content'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
                                        e.currentTarget.style.borderColor = '#f59e0b';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    }}
                                >
                                    <FiPhone size={20} />
                                    <span>+1 (903) 894-0149</span>
                                </a>
                                <a
                                    href="mailto:Greenbeelife@mail.com"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        textDecoration: 'none',
                                        fontSize: '1rem',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '50px',
                                        border: '1px solid rgba(255, 255, 255, 0.3)',
                                        transition: 'all 0.3s ease',
                                        width: 'fit-content'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
                                        e.currentTarget.style.borderColor = '#f59e0b';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    }}
                                >
                                    <FiMail size={20} />
                                    <span>Greenbeelife@mail.com</span>
                                </a>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @media (min-width: 1024px) {
                    .mobile-menu-button {
                        display: none !important;
                    }
                    .nav_links {
                        display: flex !important;
                    }
                }
                @media (max-width: 1023px) {
                    .nav_links {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Header;