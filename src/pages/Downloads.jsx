import { useEffect, useState } from 'react'
import { Download, ExternalLink, Package, Calendar, Tag } from 'lucide-react'

export default function Downloads() {
    const [releases, setReleases] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        document.title = 'Downloads | PennyPilot'
        const fetchReleases = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/gkapelakos/PennyPilot/releases')
                if (!response.ok) throw new Error('Failed to fetch releases')
                const data = await response.json()
                setReleases(data.slice(0, 5)) // Show last 5 releases
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchReleases()
    }, [])

    return (
        <div className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ marginBottom: '16px' }}>Download <span className="text-gradient">PennyPilot</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        Direct downloads from GitHub. Signed, secure, and ready for your device.
                    </p>
                </div>

                {loading && (
                    <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                        <div className="animate-pulse" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: '40px', height: '40px', background: 'var(--surface-hover)', borderRadius: '50%' }}></div>
                            <div style={{ width: '200px', height: '24px', background: 'var(--surface-hover)', borderRadius: '4px' }}></div>
                            <div style={{ width: '100%', maxWidth: '400px', height: '100px', background: 'var(--surface-hover)', borderRadius: '8px' }}></div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', borderRadius: 'var(--radius-lg)', borderColor: 'var(--accent-error)' }}>
                        <p style={{ color: 'var(--accent-error)', marginBottom: '16px', fontSize: '1.1rem' }}>Unable to fetch releases from GitHub.</p>
                        <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer" className="btn btn-secondary">
                            View on GitHub <ExternalLink size={18} />
                        </a>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {releases.map((release, index) => (
                        <ReleaseCard key={release.id} release={release} latest={index === 0} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '60px' }}>
                    <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer"
                        className="btn btn-secondary">
                        View Full Release History <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </div>
    )
}

function ReleaseCard({ release, latest }) {
    const date = new Date(release.published_at).toLocaleDateString(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
    })
    const apkAssets = release.assets.filter(a => a.name.endsWith('.apk'))

    return (
        <div className="glass-panel animate-fade-in" style={{
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            border: latest ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--border-subtle)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {latest && (
                <div style={{
                    position: 'absolute', top: '0', right: '0',
                    background: 'var(--primary)', color: 'white',
                    padding: '6px 16px', fontSize: '0.8rem', fontWeight: 600,
                    borderBottomLeftRadius: '16px'
                }}>
                    LATEST STABLE
                </div>
            )}

            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{
                    width: '50px', height: '50px', borderRadius: '12px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)'
                }}>
                    <Package size={24} />
                </div>

                <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {release.name || release.tag_name}
                                <span style={{ fontSize: '0.85rem', padding: '2px 8px', borderRadius: '20px', background: 'var(--surface-hover)', color: 'var(--text-secondary)', fontWeight: 400 }}>
                                    {release.tag_name}
                                </span>
                            </h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {date}</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxHeight: '100px', overflow: 'hidden', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                        {release.body ? release.body.split('\r\n')[0] : 'No description provided.'}
                    </div>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {apkAssets.length > 0 ? apkAssets.map(asset => (
                            <a key={asset.id} href={asset.browser_download_url}
                                className="btn btn-primary"
                                style={{ padding: '10px 20px', fontSize: '0.95rem' }}>
                                <Download size={18} />
                                <span>Download APK</span>
                                <span style={{ opacity: 0.7, fontSize: '0.85rem', marginLeft: '4px' }}>
                                    ({(asset.size / 1024 / 1024).toFixed(1)} MB)
                                </span>
                            </a>
                        )) : (
                            <a href={release.html_url} target="_blank" rel="noreferrer" className="btn btn-secondary">
                                View Release on GitHub <ExternalLink size={18} />
                            </a>
                        )}
                        {/* Always show Github link for details */}
                        <a href={release.html_url} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '10px 20px' }}>
                            Notes
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .animate-pulse {
                    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: .5; }
                }
            `}</style>
        </div>
    )
}
