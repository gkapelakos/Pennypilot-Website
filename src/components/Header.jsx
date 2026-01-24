/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom'
import { Github, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
    const { hash } = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [hash]);

    // Unified scroll lock for mobile
    useEffect(() => {
        const body = document.body;
        const html = document.documentElement;
        if (isMobileMenuOpen) {
            body.style.overflow = 'hidden';
            body.style.height = '100vh';
            body.style.touchAction = 'none';
            html.style.overflow = 'hidden'; // Lock HTML as well
        } else {
            body.style.overflow = '';
            body.style.height = '';
            body.style.touchAction = '';
            html.style.overflow = '';
        }
        return () => {
            body.style.overflow = '';
            body.style.height = '';
            body.style.touchAction = '';
            html.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/', isHash: false },
        { name: 'Features', path: '/features.html', isHash: false },
        { name: 'Downloads', path: '/downloads.html', isHash: false },
        { name: 'License', path: '/license.html', isHash: false },
    ];

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.3s ease',
                height: 'var(--header-height)',
                background: scrolled ? 'rgba(3, 3, 5, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
            }}>
                <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', zIndex: 1002 }}>
                        <img src="/assets/logo.png" alt="PennyPilot" className="logo" />
                        <span style={{ fontWeight: 800, fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.03em' }}>PennyPilot</span>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: '32px' }}>
                        {navLinks.map((link) => (
                            link.isHash ? (
                                <a key={link.name} href={link.path} className="nav-link" style={{
                                    color: 'var(--text-secondary)',
                                    fontWeight: 500,
                                    fontSize: '0.95rem',
                                    transition: 'color 0.2s'
                                }}>{link.name}</a>
                            ) : (
                                <NavLink key={link.name} to={link.path} end
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                    style={({ isActive }) => ({
                                        color: isActive ? 'var(--text-main)' : 'var(--text-secondary)',
                                        fontWeight: 500,
                                        fontSize: '0.95rem',
                                        transition: 'color 0.2s'
                                    })}
                                >
                                    {link.name}
                                </NavLink>
                            )
                        ))}

                        <div style={{ width: '1px', height: '24px', background: 'var(--border-subtle)' }}></div>

                        <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer"
                            style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                            className="github-link">
                            <Github size={20} />
                        </a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{ zIndex: 1100, display: 'flex', color: 'var(--text-main)' }}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <style>{`
                    @media (min-width: 768px) {
                        .desktop-nav { display: flex !important; }
                        .mobile-toggle { display: none !important; }
                    }
                    .active-link { color: var(--text-main) !important; }
                    .github-link:hover { color: var(--text-main) !important; }
                `}</style>
            </header>

            {/* Mobile Nav Overlay & Menu - Moved OUTSIDE of header to avoid stacking context issues */}
            <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {navLinks.map((link) => (
                        link.isHash ? (
                            <a key={link.name} href={link.path} onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>
                                {link.name}
                            </a>
                        ) : (
                            <NavLink key={link.name} to={link.path} end onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) => isActive ? "active" : ""}
                                style={({ isActive }) => ({
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: isActive ? 'var(--primary)' : 'var(--text-main)'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        )
                    ))}
                    <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '10px 0' }}></div>
                    <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                        <Github size={24} /> GitHub Repo
                    </a>
                </nav>
            </div>
        </>
    )
}
