import { ArrowDown, ArrowRight, Shield, Smartphone, Github, Lock, ScanLine, BarChart3, Fingerprint, Zap, Check, X, Database, Cpu } from 'lucide-react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <PrivacySection />
      <OpenSourceSection />
      <FooterCTASection />
    </>
  )
}

/* ============================================================
   1. Hero — what it does + why it's different + CTA + screenshot
   ============================================================ */
function HeroSection() {
  return (
    <section id="hero" className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-16))', minHeight: '100dvh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="grid-2">
          <div className="animate-fade-in">
            <div className="tag tag-indigo" style={{ marginBottom: 'var(--space-6)' }}>
              <span className="dot-pulse"></span>
              Open Source &middot; MIT Licensed
            </div>

            <h1 style={{ marginBottom: 'var(--space-6)' }}>
              Track every dollar.<br />
              <span className="text-gradient">Nothing leaves your phone.</span>
            </h1>

            <p className="section-desc" style={{ marginBottom: 'var(--space-10)' }}>
              PennyPilot scans receipts, catches subscriptions, and shows you exactly what you can spend today — all on-device, with zero cloud dependency.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer" className="btn btn-primary">
                <ArrowDown size={18} /> Download APK
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                See How It Works <ArrowRight size={16} />
              </a>
            </div>

            <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Shield size={14} /> MIT License
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Smartphone size={14} /> Android & Linux
              </span>
            </div>
          </div>

          <div className="animate-float" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: 'min(380px, 85vw)', height: 'min(380px, 85vw)',
              background: 'radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)',
              filter: 'blur(50px)', zIndex: -1,
            }}></div>
            <div style={{ maxWidth: '300px', width: '100%' }}>
              <img
                src="/assets/iPhone 15 Mockup Poster.png"
                alt="PennyPilot running on iPhone — inbox scan view showing receipt detection"
                style={{ width: '100%', borderRadius: '40px', border: '6px solid var(--border-default)', boxShadow: 'var(--shadow-lg)' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          #hero .grid-2 { text-align: center; }
          #hero .grid-2 > div:first-child { display: flex; flex-direction: column; align-items: center; }
          #hero .section-desc { margin-left: auto; margin-right: auto; }
        }
        @media (min-width: 768px) {
          #hero .grid-2 > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  )
}

/* ============================================================
   2. The Problem — brief, sets up why local-first matters
   ============================================================ */
function ProblemSection() {
  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-surface), transparent)' }}>
      <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
        <div className="section-label" style={{ justifyContent: 'center' }}>
          The problem
        </div>
        <h2 className="section-title">
          Your finance app has your bank password.
        </h2>
        <p className="section-desc" style={{ margin: '0 auto', lineHeight: 1.8 }}>
          Most personal finance tools ask you to hand over your banking credentials to a third party.
          They store your transaction history on their servers, monetize it through data brokers,
          and go down when their cloud does. You are the product, and your data is the inventory.
        </p>
      </div>
    </section>
  )
}

/* ============================================================
   3. How It Works — 4 capabilities with screenshots
   ============================================================ */
function HowItWorksSection() {
  const features = [
    {
      icon: <ScanLine size={22} />,
      iconClass: 'feature-icon-indigo',
      title: 'On-Device Receipt Scanning',
      desc: 'Point your camera at a receipt or connect your email once. PennyPilot extracts line items using on-device OCR — the image never leaves your phone.',
      screenshot: '/assets/screenshot-scan.png',
      screenshotAlt: 'Receipt scan results showing extracted line items and merchant details',
    },
    {
      icon: <Zap size={22} />,
      iconClass: 'feature-icon-emerald',
      title: 'Subscription Detection',
      desc: 'Automatically surfaces recurring charges from your transaction history. See exactly what you are paying monthly, and get alerts before renewals hit.',
      screenshot: '/assets/screenshot-inbox.png',
      screenshotAlt: 'Inbox scan showing detected subscriptions and receipts from email',
    },
    {
      icon: <BarChart3 size={22} />,
      iconClass: 'feature-icon-indigo',
      title: 'Local Dashboards & Insights',
      desc: 'Spending breakdowns, category trends, and a safe-to-spend number that accounts for upcoming bills — all computed on-device from your local Isar database.',
      screenshot: '/assets/screenshot-overview.png',
      screenshotAlt: 'Dashboard overview showing spending breakdown and safe-to-spend balance',
    },
    {
      icon: <Fingerprint size={22} />,
      iconClass: 'feature-icon-emerald',
      title: 'Biometric Lock',
      desc: 'Protect access with your fingerprint or face. Optional Google OAuth for quick sign-in, but your data stays in the local encrypted database either way.',
      screenshot: '/assets/screenshot-insights.png',
      screenshotAlt: 'Insights view showing spending analytics and category breakdowns',
    },
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <Zap size={14} /> How it works
          </div>
          <h2 className="section-title">Four capabilities, one local database</h2>
          <p className="section-desc">
            Every feature runs on your device. No background sync to a server, no API keys shared with third parties.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {features.map((f, i) => (
            <div key={f.title} className="grid-2" style={{ gap: 'var(--space-10)' }}>
              <div className="feature-item" style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div className={`feature-icon ${f.iconClass}`}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 'var(--text-2xl)' }}>{f.title}</h3>
                <p style={{ fontSize: 'var(--text-base)', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
              <div className="screenshot-frame" style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <img src={f.screenshot} alt={f.screenshotAlt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   4. Privacy / Architecture — the real differentiator
   ============================================================ */
function PrivacySection() {
  const pillars = [
    {
      icon: <Database size={20} />,
      title: 'Local Isar Database',
      desc: 'Your transactions, receipts, and categories live in an encrypted Isar database stored only on your device. We cannot access it.',
    },
    {
      icon: <Cpu size={20} />,
      title: 'On-Device ML',
      desc: 'Receipt OCR and merchant classification run through ML Kit and TensorFlow Lite — entirely on your phone\'s hardware. No cloud vision APIs.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Optional P2P Sync',
      desc: 'Share data between your own devices using CRDT-based peer-to-peer sync. There is no central server — your devices talk directly to each other.',
    },
    {
      icon: <Github size={20} />,
      title: 'Open Source (MIT)',
      desc: 'Every line of code is auditable. No hidden telemetry, no analytics SDKs, no mysterious network calls. The repo is the proof.',
    },
  ]

  return (
    <section id="privacy" className="section" style={{ background: 'linear-gradient(to bottom, transparent, var(--bg-surface), transparent)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--emerald)' }}>
            <Lock size={14} /> Architecture
          </div>
          <h2 className="section-title">
            Built around a <span className="text-gradient">privacy-first</span> architecture
          </h2>
          <p className="section-desc">
            This is not a marketing claim — it is a technical constraint. The architecture makes it physically impossible for us to access your data.
          </p>
        </div>

        <div className="arch-grid">
          {pillars.map((p) => (
            <div key={p.title} className="arch-card">
              <div className="arch-icon">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-12)' }}>
          <TheNoPhilosophy />
        </div>
      </div>
    </section>
  )
}

function TheNoPhilosophy() {
  const items = [
    { negative: true, icon: <X size={16} />, title: 'No Cloud Sync', desc: 'Your financial data stays on your phone.' },
    { negative: true, icon: <X size={16} />, title: 'No Bank APIs', desc: 'We never see your banking credentials.' },
    { negative: true, icon: <X size={16} />, title: 'No Analytics', desc: 'Zero tracking scripts. Zero pings to any server.' },
    { negative: false, icon: <Check size={16} />, title: 'Yes to Freedom', desc: 'Export your data to CSV or JSON anytime.' },
  ]

  return (
    <div className="card-flat" style={{ maxWidth: '560px', margin: '0 auto' }}>
      <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-6)', textAlign: 'center' }}>The "No" Philosophy</h3>
      <div className="check-list">
        {items.map((item) => (
          <div key={item.title} className="check-item">
            <div className={`check-icon ${item.negative ? 'check-icon-red' : 'check-icon-green'}`}>
              {item.icon}
            </div>
            <div>
              <strong>{item.title}</strong>
              <span>{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   5. Open Source / Tech Stack
   ============================================================ */
function OpenSourceSection() {
  const tech = [
    { label: 'Flutter & Dart', desc: 'Cross-platform from one codebase: Android, iOS, desktop, web.' },
    { label: 'Isar Database', desc: 'Fast, type-safe local database with encrypted storage.' },
    { label: 'ML Kit / TFLite', desc: 'On-device machine learning for receipt OCR and classification.' },
    { label: 'Riverpod', desc: 'Reactive state management with compile-time safety.' },
  ]

  return (
    <section id="open-source" className="section">
      <div className="container">
        <div className="grid-2">
          <div>
            <div className="section-label">
              <Github size={14} /> Open Source
            </div>
            <h2 className="section-title" style={{ marginBottom: 'var(--space-6)' }}>
              Built in the open. Auditable by anyone.
            </h2>
            <p className="section-desc" style={{ marginBottom: 'var(--space-8)' }}>
              PennyPilot is built with Flutter — a single codebase targeting Android, iOS, Linux, macOS, Windows, and web. The entire codebase is MIT-licensed on GitHub.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer" className="btn btn-primary">
                <Github size={18} /> View on GitHub
              </a>
              <a href="https://github.com/gkapelakos/PennyPilot/issues" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Report an Issue
              </a>
            </div>
          </div>

          <div className="grid-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {tech.map((t) => (
              <div key={t.label} className="card" style={{ padding: 'var(--space-5)' }}>
                <h4 style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>{t.label}</h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 1.5 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================
   6. Footer CTA — repeat primary action + links
   ============================================================ */
function FooterCTASection() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
          Your finances. Your device. Your rules.
        </h2>
        <p className="section-desc" style={{ margin: '0 auto var(--space-8)', textAlign: 'center' }}>
          Download PennyPilot, or grab the source code and build it yourself.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/gkapelakos/PennyPilot/releases" target="_blank" rel="noreferrer" className="btn btn-primary">
            <ArrowDown size={18} /> Download APK
          </a>
          <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer" className="btn btn-secondary">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
