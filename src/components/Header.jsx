import { Github, Menu, X, Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('pp-theme') || 'dark'
    }
    return 'dark'
  })

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('pp-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on hash change
  useEffect(() => {
    const handleHashChange = () => setIsMobileMenuOpen(false)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    const body = document.body
    if (isMobileMenuOpen) {
      body.style.overflow = 'hidden'
      body.style.touchAction = 'none'
    } else {
      body.style.overflow = ''
      body.style.touchAction = ''
    }
    return () => { body.style.overflow = ''; body.style.touchAction = '' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Privacy', href: '#privacy' },
    { name: 'Open Source', href: '#open-source' },
  ]

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--header-height)',
        background: scrolled ? 'var(--bg-page)' : 'transparent',
        opacity: scrolled ? 0.92 : 1,
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
        transition: 'all var(--duration-normal) ease',
      }}>
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', zIndex: 102 }}>
            <img src="/assets/logo.png" alt="PennyPilot" style={{ height: '32px', width: 'auto', borderRadius: '8px' }} />
            <span style={{ fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.03em' }}>PennyPilot</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: 'var(--space-8)' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
            ))}

            <div style={{ width: '1px', height: '20px', background: 'var(--border-default)' }}></div>

            <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '8px 20px', minHeight: '36px', fontSize: 'var(--text-xs)' }}>
              Download APK
            </a>

            <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}
              className="nav-link" aria-label="GitHub repository">
              <Github size={18} />
            </a>

            <button onClick={toggleTheme} className="nav-link" style={{ display: 'flex', alignItems: 'center' }} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <button onClick={toggleTheme} className="mobile-theme-toggle"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', color: 'var(--text-secondary)' }}
              aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)' }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle, .mobile-theme-toggle { display: none !important; }
          }
          .nav-link:hover { color: var(--text-primary) !important; }
        `}</style>
      </header>

      {/* Mobile Overlay & Menu */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)} />
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
            {link.name}
          </a>
        ))}
        <div style={{ height: '1px', background: 'var(--border-default)', margin: 'var(--space-2) 0' }}></div>
        <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
          Download APK
        </a>
        <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}>
          <Github size={20} /> GitHub Repository
        </a>
      </div>
    </>
  )
}
