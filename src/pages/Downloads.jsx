import { useEffect, useState } from 'react'
import { Download, ExternalLink } from 'lucide-react'

export default function Downloads() {
    const [releases, setReleases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        document.title = 'PennyPilot | Downloads'
        const fetchReleases = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/gkapelakos/PennyPilot/releases')
                if (!response.ok) throw new Error('Failed to fetch releases')
                const data = await response.json()
                setReleases(data.slice(0, 2))
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchReleases()
    }, [])

    return (
        <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%', maxWidth: '700px', margin: '40px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>Download PennyPilot</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Get the latest APK directly from our GitHub releases. <br />
                        Secure, signed, and ready to install.
                    </p>
                </div>

                <div className="glass-panel" style={{ padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                    {loading && <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>Loading releases...</div>}

                    {error && (
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ color: '#ef4444', marginBottom: '16px' }}>Unable to load latest releases directly.</p>
                            <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer" className="btn btn-secondary">
                                View on GitHub
                            </a>
                        </div>
                    )}

                    {releases.length > 0 && releases.map(release => (
                        <ReleaseCard key={release.id} release={release} />
                    ))}

                    <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--border-subtle)' }}>
                        <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                            View All Releases on GitHub <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReleaseCard({ release }) {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
    })
    const apkAssets = release.assets.filter(a => a.name.endsWith('.apk'))

    return (
        <div style={{ marginBottom: '40px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '40px' }} className="release-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '20px', flexWrap: 'wrap', gap: '8px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{release.name || release.tag_name}</h3>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{date}</span>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
                {apkAssets.length > 0 ? apkAssets.map(asset => (
                    <a key={asset.id} href={asset.browser_download_url}
                        className="btn btn-primary"
                        style={{ justifyContent: 'space-between', width: '100%', background: '#fff', color: '#000', border: 'none', textDecoration: 'none' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Download size={20} />
                            {asset.name}
                        </span>
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>
                            {(asset.size / 1024 / 1024).toFixed(2)} MB
                        </span>
                    </a>
                )) : (
                    <a href={release.html_url} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                        View Release on GitHub <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                    </a>
                )}
            </div>
            <style>{`
                .release-card:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                    margin-bottom: 0;
                }
            `}</style>
        </div>
    )
}
