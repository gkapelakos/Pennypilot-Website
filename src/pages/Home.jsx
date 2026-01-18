import { ArrowDown, Shield, BarChart3, Lock, Wrench, X, Check, ArrowRight, Smartphone, Zap } from 'lucide-react'
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
                background: 'radial-gradient(circle at 60% 0%, rgba(59, 130, 246, 0.12), transparent 60%)',
                zIndex: -1,
                pointerEvents: 'none'
            }}></div>

            <section className="hero-section" style={{
                padding: 'calc(var(--header-height) + 40px) 0 60px',
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container grid-2">
                    <div className="hero-content animate-fade-in">
                        {/* ... existing badge ... */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            padding: '8px 16px', background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '30px', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, marginBottom: '32px',
                            border: '1px solid rgba(59, 130, 246, 0.2)', letterSpacing: '0.02em'
                        }}>
                            <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
                                <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', backgroundColor: '#3b82f6', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '8px', width: '8px', backgroundColor: '#3b82f6' }}></span>
                            </span>
                            v1.0 Release Candidate
                        </div>

                        <h1 style={{ marginBottom: '24px', letterSpacing: '-0.03em' }}>
                            Your personal financial <span className="text-gradient">navigator.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '580px', lineHeight: 1.5 }}>
                            The only finance tracker that runs <strong style={{ color: 'var(--text-main)' }}>100% on your device</strong>. No servers. No selling your data. Just intelligent, local automation.
                        </p>
                        {/* ... buttons ... */}
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to="/downloads.html" className="btn btn-primary">
                                <ArrowDown size={20} />
                                Download APK
                            </Link>
                            <Link to="/features.html" className="btn btn-secondary">
                                See How It Works
                            </Link>
                        </div>
                        {/* ... footer badges ... */}
                        <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Shield size={16} /> MIT License
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Smartphone size={16} /> Android & Linux
                            </span>
                        </div>
                    </div>

                    <div className="hero-visual animate-float" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '50%', left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 'min(400px, 90vw)', height: 'min(400px, 90vw)',
                            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                            filter: 'blur(60px)',
                            zIndex: -1
                        }}></div>

                        <div className="phone-mockup" style={{
                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.5))',
                            maxWidth: '320px',
                            width: '100%'
                        }}>
                            <img src="/assets/iPhone 15 Mockup Poster.png" alt="PennyPilot App Interface" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '48px', border: '8px solid #1a1a1a' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="section-padding" style={{ position: 'relative' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
                        <h2 style={{ marginBottom: '20px' }}>Intelligence without the <span className="text-gradient">Cloud</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                            PennyPilot brings powerful AI features directly to your pocket, powered by on-device processing.
                        </p>
                    </div>
                    {/* ... grid ... */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
                        <FeatureCard icon={<Zap size={32} color="var(--primary-rgb)" />} title="Smart Inbox Scan" desc="Connect your Gmail once. We scan for receipts from Uber, Amazon, and Spotify locally on your phone." />
                        <FeatureCard icon={<BarChart3 size={32} color="var(--primary-rgb)" />} title="Safe-to-Spend" desc="Know exactly how much you can spend today based on your budget and upcoming bills." />
                        <FeatureCard icon={<Shield size={32} color="var(--primary-rgb)" />} title="Local-First" desc="Your database (Isar) is encrypted and stored only on your device. We physically cannot see your data." />
                        <FeatureCard icon={<Wrench size={32} color="var(--primary-rgb)" />} title="Material You" desc="A stunning, adaptive interface built with Flutter 3 that respects your system theme preferences." />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/features.html" className="btn btn-secondary" style={{ padding: '16px 48px' }}>
                            Explore All Features <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            <section id="philosophy" className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.02))' }}>
                <div className="container grid-2">
                    <div className="philosophy-text">
                        <h2 style={{ marginBottom: '24px' }}>The "No" Philosophy</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.7 }}>
                            Modern apps treat you like a product. They want your data, your attention, and your monthly subscription. <br /><br />
                            <strong style={{ color: 'var(--text-main)' }}>PennyPilot is different.</strong>
                        </p>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', listStyle: 'none' }}>
                            <CheckItem negative icon={<X size={20} />} title="No Cloud Sync" desc="Your financial life stays on your phone." />
                            <CheckItem negative icon={<X size={20} />} title="No Bank APIs" desc="We don't want your banking credentials." />
                            <CheckItem negative icon={<X size={20} />} title="No Analytics" desc="Zero tracking scripts. Zero pings." />
                            <CheckItem icon={<Check size={20} />} title="Yes to Freedom" desc="Export your data to CSV/JSON anytime." />
                        </ul>
                    </div>

                    <div className="philosophy-visual" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{
                            width: '100%', maxWidth: '360px', aspectRatio: '1/1',
                            background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(59,130,246,0.02))',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            border: '1px solid rgba(59,130,246,0.1)',
                            boxShadow: '0 0 80px rgba(59,130,246,0.08)',
                            position: 'relative'
                        }}>
                            <Shield size={140} strokeWidth={0.8} color="rgba(59,130,246,0.8)" />
                            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px dashed rgba(59,130,246,0.2)', animation: 'spin 30s linear infinite' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
                @media (max-width: 900px) {
                    .hero-content { text-align: center; display: flex; flex-direction: column; align-items: center; margin-bottom: 40px; }
                    .hero-content h1 { font-size: 2.5rem; }
                    .hero-visual { transform: scale(0.9); }
                    .philosophy-text { order: 1; text-align: center; }
                    .philosophy-text ul { align-items: center; }
                    .philosophy-visual { order: 2; margin-top: 40px; }
                }
                @media (min-width: 901px) {
                    .phone-mockup { transform: rotate(-5deg); }
                    .philosophy-text { order: 2; }
                    .philosophy-visual { order: 1; }
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
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                marginBottom: '24px',
                background: 'rgba(59,130,246,0.08)',
                width: '64px', height: '64px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '20px',
                color: '#60a5fa'
            }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{desc}</p>
        </div>
    )
}

function CheckItem({ icon, title, desc, negative }) {
    return (
        <li style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{
                flexShrink: 0,
                width: '36px', height: '36px',
                borderRadius: '50%',
                background: negative ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
                color: negative ? '#ef4444' : '#22c55e',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '4px'
            }}>
                {icon}
            </div>
            <div style={{ textAlign: 'left' }}>
                <strong style={{ display: 'block', marginBottom: '4px', fontSize: '1.15rem' }}>{title}</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{desc}</span>
            </div>
        </li>
    )
}
