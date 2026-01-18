export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '60px 0 40px',
            marginTop: 'auto',
            backgroundColor: '#0A0A0C'
        }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
                    <div>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, display: 'block', marginBottom: '8px' }}>PennyPilot</span>
                        <p style={{ color: 'var(--text-secondary)' }}>Free. Open. Private.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="/license.html" target="_blank" className="nav-link">License</a>
                        <a href="https://github.com/gkapelakos/PennyPilot/issues" target="_blank" rel="noreferrer" className="nav-link">Report Issue</a>
                        <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '24px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    &copy; {new Date().getFullYear()} PennyPilot Contributors.
                </div>
            </div>
        </footer>
    )
}
