/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import { ShieldCheck, FileText } from 'lucide-react'

export default function License() {
    useEffect(() => {
        document.title = 'License | PennyPilot'
    }, [])

    return (
        <div className="section-padding">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        width: '64px', height: '64px', borderRadius: '16px',
                        background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e',
                        marginBottom: '24px'
                    }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h1 style={{ marginBottom: '16px' }}>Open Source <span className="text-gradient">License</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
                        PennyPilot is distributed under the MIT License. Transparency is at our core.
                    </p>
                </div>

                <div className="glass-panel" style={{ padding: '48px', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        marginBottom: '32px', paddingBottom: '24px',
                        borderBottom: '1px solid var(--border-subtle)'
                    }}>
                        <FileText size={20} color="var(--text-muted)" />
                        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            MIT License Content
                        </span>
                    </div>

                    <pre style={{
                        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                        whiteSpace: 'pre-wrap',
                        color: 'var(--text-secondary)',
                        fontSize: '0.95rem',
                        lineHeight: 1.8,
                        overflowX: 'auto'
                    }}>
                        {`MIT License

Copyright (c) 2025 PennyPilot Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
                    </pre>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        Questions about the license? Visit our <a href="https://github.com/gkapelakos/PennyPilot" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>GitHub repository</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}
