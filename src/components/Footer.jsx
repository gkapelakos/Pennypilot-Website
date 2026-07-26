export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
          <div>
            <span style={{ fontSize: '1.1rem', fontWeight: 700, display: 'block', marginBottom: 'var(--space-1)' }}>PennyPilot</span>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>Free. Open. Private.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#privacy" className="nav-link">Privacy</a>
            <a href="#open-source" className="nav-link">Open Source</a>
            <a href="https://github.com/gkapelakos/PennyPilot/issues" target="_blank" rel="noreferrer" className="nav-link">Report Issue</a>
            <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 'var(--space-6)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <span>&copy; {new Date().getFullYear()} PennyPilot Contributors.</span>
          <span>MIT Licensed</span>
        </div>
      </div>
    </footer>
  )
}
