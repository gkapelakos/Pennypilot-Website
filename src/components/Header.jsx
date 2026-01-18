/* eslint-disable react/prop-types */
import { NavLink, useLocation } from 'react-router-dom'
import { Github } from 'lucide-react'
import { useEffect } from 'react'

export default function Header() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(5, 5, 5, 0.7)',
            borderBottom: '1px solid var(--border-subtle)'
        }}>
            <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="/assets/pennypilot_logo.png" alt="PennyPilot" style={{ width: '36px', height: '36px' }} />
                    <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.02em' }}>PennyPilot</span>
                </NavLink>

                <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
                    <a href="/#features" className="nav-link">Features</a>
                    <NavLink to="/downloads.html" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Downloads</NavLink>

                    <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer"
                        style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                        className="github-link">
                        <Github size={22} />
                    </a>
                </nav>
            </div>
        </header>
    )
}
