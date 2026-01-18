import { ArrowDown, Shield, BarChart3, Lock, Wrench, X, Check, ArrowRight } from 'lucide-react'
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
                background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1), transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <section className="hero-section" style={{
                padding: '120px 0 80px',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container grid-2">
                    <div className="hero-content animate-fade-in">
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '6px 12px', background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '20px', color: '#60a5fa', fontSize: '0.9rem', marginBottom: '24px',
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', boxShadow: '0 0 8px currentColor' }}></span>
                            v1.0 Release Candidate Available
                        </div>

                        <h1 style={{ marginBottom: '24px' }}>
                            Finance without the <br />
                            <span className="text-gradient">noise.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '540px' }}>
                            A serious tool for serious tracking. <br />
                            <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>Private. Local. Open Source.</span>
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '540px', lineHeight: '1.7' }}>
                            Take full ownership of your financial data. No cloud syncs, no bank connections, no tracking scripts. Just you and your numbers, exactly where they belong—on your device.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to="/downloads.html" className="btn btn-primary">
                                <ArrowDown size={20} />
                                Download APK
                            </Link>
                            <a href="#philosophy" className="btn btn-secondary">
                                Philosophy <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual animate-float" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        {/* Blob behind phone */}
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '300px', height: '300px',
                            background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
                            filter: 'blur(40px)',
                            zIndex: -1
                        }}></div>

                        <div className="phone-mockup" style={{
                            filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.6))',
                            maxWidth: '320px',
                            width: '100%'
                        }}>
                            <img src="/assets/iPhone 15 Mockup Poster.png" alt="PennyPilot App Interface" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '40px' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
                        <h2 style={{ marginBottom: '20px' }}>Built for Data <span className="text-gradient">Sovereignty</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>We stripped away the fluff to focus on what matters: precision, speed, and absolute privacy.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <FeatureCard
                            icon={<Lock size={32} color="var(--primary-rgb)" />}
                            title="Local-First"
                            desc="Your database lives on your phone. It never leaves your release build unless you manually export it. Full offline support."
                        />
                        <FeatureCard
                            icon={<BarChart3 size={32} color="var(--primary-rgb)" />}
                            title="Granular Tracking"
                            desc="Track every cent with custom categories, multi-currency support, and detailed transaction logs."
                        />
                        <FeatureCard
                            icon={<Shield size={32} color="var(--primary-rgb)" />}
                            title="Zero Tracking"
                            desc="We don't know who you are, what you buy, or how much you have. That's by design. No analytics, no pings."
                        />
                        <FeatureCard
                            icon={<Wrench size={32} color="var(--primary-rgb)" />}
                            title="FOSS"
                            desc="Open source code (MIT). Inspect it, build it, fork it. Trust is earned through transparency."
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Link to="/features.html" className="btn btn-secondary" style={{ padding: '14px 40px' }}>
                            Explore All Features <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02))' }}>
                <div className="container grid-2">
                    <div style={{ order: 2 }}>{/* Text comes second on mobile usually, but grid-2 makes it side by side on desktop. Let's keep typical order */}
                        <h2 style={{ marginBottom: '24px' }}>The "No" Philosophy</h2>
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

                    <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
                        <div style={{
                            width: '100%', maxWidth: '400px', aspectRatio: '1/1',
                            background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.02))',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid rgba(59,130,246,0.1)',
                            boxShadow: '0 0 60px rgba(59,130,246,0.05)',
                            position: 'relative'
                        }}>
                            <Shield size={140} strokeWidth={1} color="rgba(59,130,246,0.8)" />
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(59,130,246,0.2)', animation: 'spin 20s linear infinite' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @media (max-width: 900px) {
                    .hero-content {
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .hero-content h1 { font-size: 2.5rem; }
                    .hero-visual { margin-top: 40px; }
                }
            `}</style>
        </>
    )
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: 'var(--radius-lg)',
            transition: 'transform 0.3s ease, border-color 0.3s',
            height: '100%'
        }}>
            <div style={{
                marginBottom: '24px',
                background: 'rgba(59,130,246,0.1)',
                width: '60px', height: '60px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '16px',
                color: '#3b82f6'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{desc}</p>
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
                <strong style={{ display: 'block', marginBottom: '4px', fontSize: '1.1rem' }}>{title}</strong>
                <span style={{ color: 'var(--text-secondary)' }}>{desc}</span>
            </div>
        </li>
    )
}
