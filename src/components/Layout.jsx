import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, paddingTop: '80px', display: 'flex', flexDirection: 'column' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
