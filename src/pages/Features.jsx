import { useEffect } from 'react'
import { Shield, Mail, Bell, Wallet, BarChart3, Palette, Layout, CheckCircle2, Smartphone, Monitor } from 'lucide-react'

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
                    <h1 style={{ marginBottom: '20px' }}>Built for <span className="text-gradient">Power & Privacy</span></h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        PennyPilot combines the convenience of modern automation with the security of a local-first architecture.
                        Explore the features that make us different.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {featureGroups.map((group, idx) => (
                        <div key={group.title} className="grid-2" style={{ alignItems: 'flex-start' }}>
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
                                <div style={{ display: 'grid', gap: '16px' }}>
                                    {group.items.map(item => (
                                        <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <CheckCircle2 size={20} color={group.color} style={{ marginTop: '2px', flexShrink: 0 }} />
                                            <span style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{
                                order: idx % 2 === 0 ? 2 : 1,
                                display: 'flex', justifyContent: 'center'
                            }}>
                                <div className="glass-panel" style={{
                                    width: '100%', maxWidth: '500px', aspectRatio: '16/10',
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
                                    <div style={{ zIndex: 1, opacity: 0.8 }}>
                                        {idx === 0 && <Shield size={120} strokeWidth={1} color={group.color} />}
                                        {idx === 1 && <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <Mail size={80} strokeWidth={1} color={group.color} />
                                            <div style={{ width: '40px', height: '2px', background: 'var(--border-subtle)' }}></div>
                                            <Layout size={80} strokeWidth={1} color={group.color} />
                                        </div>}
                                        {idx === 2 && <BarChart3 size={120} strokeWidth={1} color={group.color} />}
                                        {idx === 3 && <div style={{ display: 'flex', gap: '20px' }}>
                                            <Smartphone size={80} strokeWidth={1} color={group.color} />
                                            <Monitor size={80} strokeWidth={1} color={group.color} />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-padding" style={{ textAlign: 'center', marginTop: '60px' }}>
                    <div className="glass-panel" style={{ padding: '60px', borderRadius: 'var(--radius-lg)' }}>
                        <h2 style={{ marginBottom: '24px' }}>Ready to take control?</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.2rem' }}>
                            Download PennyPilot today and start tracking without compromise.
                        </p>
                        <a href="/downloads.html" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
                            Download Latest APK
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
