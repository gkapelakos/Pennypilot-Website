import { ArrowDown, Shield, BarChart3, Lock, Wrench, X, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="background-glow" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 60%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <section className="hero-section" style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'center' }}>
                    <div className="hero-content">
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '24px' }}>
                            Finance without the <span className="text-gradient">noise.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.5 }}>
                            A serious tool for serious tracking. <br />
                            <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Private. Local. Open Source.</span>
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '540px' }}>
                            Take full ownership of your financial data. No cloud syncs, no bank connections, no tracking scripts. Just you and your numbers, exactly where they belong—on your device.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
                            <Link to="/downloads.html" className="btn btn-primary">
                                <ArrowDown size={20} />
                                Download APK
                            </Link>
                            <a href="#philosophy" className="btn btn-secondary">
                                Why PennyPilot?
                            </a>
                        </div>

                        <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }}></span>
                                Release Ready
                            </span>
                            <span>Android</span>
                        </div>
                    </div>

                    <div className="hero-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                        <div className="phone-mockup" style={{
                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                            animation: 'float 6s ease-in-out infinite',
                            maxWidth: '300px'
                        }}>
                            <img src="/assets/iPhone 15 Mockup Poster.png" alt="PennyPilot App Interface" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '40px' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Built for Data Sovereignty</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>We stripped away the fluff to focus on what matters: precision and privacy.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                        <FeatureCard
                            icon={<Lock size={32} color="var(--primary)" />}
                            title="Local-First"
                            desc="Your database lives on your phone. It never leaves your release build unless you manually export it."
                        />
                        <FeatureCard
                            icon={<BarChart3 size={32} color="var(--primary)" />}
                            title="Granular Tracking"
                            desc="Track every cent with custom categories, multi-currency support, and detailed transaction logs."
                        />
                        <FeatureCard
                            icon={<Shield size={32} color="var(--primary)" />}
                            title="Zero Tracking"
                            desc="We don't know who you are, what you buy, or how much you have. That's by design."
                        />
                        <FeatureCard
                            icon={<Wrench size={32} color="var(--primary)" />}
                            title="FOSS"
                            desc="Open source code (MIT). Inspect it, build it, fork it. Trust is earned through transparency."
                        />
                    </div>
                </div>
            </section>

            <section id="philosophy" style={{ padding: '100px 0', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02))' }}>
                <div className="container">
                    <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>The "No" Philosophy</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                                Modern apps want your data, your attention, and your monthly subscription. PennyPilot takes a different approach.
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyle: 'none' }}>
                                <CheckItem negative icon={<X size={20} />} title="No Cloud Sync" desc="Your data stays on your device. Period." />
                                <CheckItem negative icon={<X size={20} />} title="No Bank Connections" desc="We don't want your credentials. Manual entry ensures mindfulness." />
                                <CheckItem negative icon={<X size={20} />} title="No Ads or Tracking" desc="You are the user, not the product." />
                                <CheckItem icon={<Check size={20} />} title="Yes to Freedom" desc="Export your data as CSV/JSON anytime. You own it." />
                            </ul>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                width: '300px', height: '300px',
                                background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.05))',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid rgba(59,130,246,0.2)',
                                boxShadow: '0 0 60px rgba(59,130,246,0.1)'
                            }}>
                                <Shield size={120} strokeWidth={1} color="rgba(59,130,246,0.8)" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @media (max-width: 900px) {
          .hero-section .container, .philosophy-grid {
             grid-template-columns: 1fr !important;
             text-align: center;
          }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-meta { justify-content: center; }
          .hero-visual { margin-top: 40px; }
          .philosophy-grid > div:last-child { margin-top: 40px; }
        }
      `}</style>
        </>
    )
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-md)', transition: 'transform 0.2s', cursor: 'default' }}>
            <div style={{ marginBottom: '20px', background: 'rgba(59,130,246,0.1)', width: 'fit-content', padding: '12px', borderRadius: '12px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</p>
        </div>
    )
}

function CheckItem({ icon, title, desc, negative }) {
    return (
        <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div style={{
                flexShrink: 0,
                width: '32px', height: '32px',
                borderRadius: '50%',
                background: negative ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                color: negative ? '#ef4444' : '#22c55e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '2px'
            }}>
                {icon}
            </div>
            <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', marginBottom: '4px', fontSize: '1.05rem' }}>{title}</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{desc}</span>
            </div>
        </li>
    )
}
