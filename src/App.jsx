import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Downloads from './pages/Downloads'
import License from './pages/License'
import Layout from './components/Layout'

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/index.html" element={<Home />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/downloads.html" element={<Downloads />} />
                <Route path="/license" element={<License />} />
                <Route path="/license.html" element={<License />} />
            </Route>
        </Routes>
    )
}

export default App
