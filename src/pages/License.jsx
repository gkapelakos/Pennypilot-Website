/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'

export default function License() {
    useEffect(() => {
        document.title = 'License | PennyPilot'
    }, [])

    return (
        <div className="container section-padding" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>MIT License</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>PennyPilot is proud to be open source.</p>
            </div>

            <div className="glass-panel" style={{ padding: '40px', borderRadius: 'var(--radius-md)' }}>
                <pre style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    whiteSpace: 'pre-wrap',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    overflowX: 'auto'
                }}>
                    {`MIT License

Copyright (c) 2026 PennyPilot Contributors

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
        </div>
    )
}
