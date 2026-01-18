import { useEffect } from 'react'
import { Shield, Mail, Bell, Wallet, BarChart3, Palette, Layout, CheckCircle2, Smartphone, Monitor, Database, Code2, Cpu, Lock } from 'lucide-react'

export default function Features() {
    useEffect(() => {
        document.title = 'Features | PennyPilot'
    }, [])

    const featureGroups = [
        {
            title: "Privacy & Security",
            icon: <Shield size={32} />,
            color: "#22c55e",
            desc: "The foundation of PennyPilot is absolute data sovereignty. We believe your financial data belongs to you—and only you.",
            items: [
                "100% Local Data: No cloud databases, no tracking pings, no external servers.",
                "Zero Data Selling: We have no way to see your data, let alone sell it.",
                "Encrypted Backups: Secure your exports with optional passphrase protection.",
                "Open Source: Audit our code to verify every security claim we make."
            ]
        },
        {
            title: "Smart Automation",
            icon: <Mail size={32} />,
            color: "#3b82f6",
            desc: "Stop manual entry. PennyPilot uses local intelligence to find your transactions where they already exist.",
            items: [
                "Smart Inbox Scan: Connect your Gmail once; we scan for receipts locally on your device.",
                "Merchant Recognition: Automatically detects Amazon, Uber, Spotify, Steam, and many more.",
                "Subscription Detection: Identifies recurring bills before they hit your statement.",
                "Local AI Parsing: Metadata extraction happens in memory, never leaving your device ecosystem."
            ]
        },
        {
            title: "Financial Intelligence",
            icon: <Wallet size={32} />,
            color: "#8b5cf6",
            desc: "Move beyond simple tracking. Get actionable insights that help you spend more mindfully.",
            items: [
                "Safe-to-Spend: Know exactly what you can afford today after accounting for upcoming bills.",
                "Renewal Alerts: Get notified for upcoming subscriptions and avoid unwanted charges.",
                "Price Hike Detection: We alert you if a recurring subscription increases in price.",
                "Granular Analytics: Deep dive into category spending with interactive charts."
            ]
        },
        {
            title: "Modern Experience",
            icon: <Palette size={32} />,
            color: "#f43f5e",
            desc: "A professional tool shouldn't feel like a spreadsheet. We've built a world-class UI for power users.",
            items: [
                "Material You: Adaptive themes that match your style, powered by Material 3.",
                "Multi-Platform: Responsive experience on Android, Linux, and Windows.",
                "Lottie Animations: Fluid, meaningful interactions that make tracking delightful.",
                "Multi-Currency: Track spending across different currencies with ease."
            ]
        }
    ]

    return (
        <div className="section-padding">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
                    <h1 style={{ marginBottom: '24px' }}>Built for <span className="text-gradient">Power & Privacy</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        PennyPilot combines the convenience of modern automation with the security of a local-first architecture.
                        Explore the features that make us different.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginBottom: '120px' }}>
                    {featureGroups.map((group, idx) => (
                        <div key={group.title} className="grid-2 feature-group" style={{ alignItems: 'flex-start' }}>
                            <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                                <div style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    width: '64px', height: '64px', borderRadius: '16px',
                                    background: `${group.color}15`, color: group.color,
                                    marginBottom: '24px'
                                }}>
                                    {group.icon}
                                </div>
                                <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>{group.title}</h2>
                                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.7 }}>
                                    {group.desc}
                                </p>
                                <div style={{ display: 'grid', gap: '20px' }}>
                                    {group.items.map(item => (
                                        <div key={item} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                            <CheckCircle2 size={22} color={group.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.5 }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{
                                order: idx % 2 === 0 ? 2 : 1,
                                display: 'flex', justifyContent: 'center'
                            }}>
                                <div className="glass-panel" style={{
                                    width: '100%', maxWidth: '550px', aspectRatio: '16/10',
                                    borderRadius: 'var(--radius-lg)', padding: '20px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    position: 'relative', overflow: 'hidden'
                                }}>
                                    {/* Abstract visual representation based on icon */}
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        background: `radial-gradient(circle at center, ${group.color}08 0%, transparent 70%)`,
                                        zIndex: 0
                                    }}></div>
                                    <div style={{ zIndex: 1, opacity: 0.9 }}>
                                        {idx === 0 && <Shield size={140} strokeWidth={0.8} color={group.color} />}
                                        {idx === 1 && <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <Mail size={90} strokeWidth={0.8} color={group.color} />
                                            <div style={{ width: '40px', height: '2px', background: 'var(--border-subtle)' }}></div>
                                            <Layout size={90} strokeWidth={0.8} color={group.color} />
                                        </div>}
                                        {idx === 2 && <BarChart3 size={140} strokeWidth={0.8} color={group.color} />}
                                        {idx === 3 && <div style={{ display: 'flex', gap: '20px' }}>
                                            <Smartphone size={90} strokeWidth={0.8} color={group.color} />
                                            <Monitor size={90} strokeWidth={0.8} color={group.color} />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-padding" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ marginBottom: '16px' }}>Transparent <span className="text-gradient">Tech Stack</span></h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Built with modern, battle-tested open source technologies.</p>
                    </div>

                    <div className="grid-3">
                        <TechCard icon={<Code2 />} title="Flutter & Dart" desc="High-performance, cross-platform framework for silky smooth 60fps rendering on Android, Linux, and Windows." />
                        <TechCard icon={<Database />} title="Isar Database" desc="Ultra-fast, fully asynchronous NoSQL database designed specifically for Flutter mobile apps." />
                        <TechCard icon={<Cpu />} title="Local AI & ML" desc="Powered by MediaPipe & Gemma (Experimental) for on-device parsing without cloud dependencies." />
                        <TechCard icon={<Layout />} title="Riverpod" desc="Robust, compile-safe state management ensuring predictable app behavior and testability." />
                        <TechCard icon={<Lock />} title="Local Auth" desc="Secured with device biometrics and industry-standard cryptography packages." />
                        <TechCard icon={<Shield />} title="Google OAuth 2.0" desc="Secure, direct connection to your Gmail for read-only access. Tokens stay on your device." />
                    </div>
                </div>

                <div className="section-padding" style={{ textAlign: 'center', marginTop: '40px' }}>
                    <div className="glass-panel" style={{ padding: '80px 40px', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, rgba(20,20,23,0.6) 0%, rgba(59,130,246,0.05) 100%)' }}>
                        <h2 style={{ marginBottom: '24px', fontSize: '2.5rem' }}>Ready to take control?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px' }}>
                            Join thousands of users who are tracking their finances without compromising their privacy.
                        </p>
                        <a href="/downloads.html" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.1rem' }}>
                            Download Latest APK
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function TechCard({ icon, title, desc }) {
    return (
        <div className="glass-panel" style={{ padding: '32px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ color: 'var(--primary)', background: 'rgba(59,130,246,0.1)', width: 'fit-content', padding: '12px', borderRadius: '12px' }}>
                {icon}
            </div>
            <h3 style={{ fontSize: '1.25rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{desc}</p>
        </div>
    )
}
