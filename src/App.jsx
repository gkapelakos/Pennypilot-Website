import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        {/* Legacy routes redirect to home */}
        <Route path="/features" element={<Navigate to="/#how-it-works" replace />} />
        <Route path="/features.html" element={<Navigate to="/#how-it-works" replace />} />
        <Route path="/downloads" element={<Navigate to="/#hero" replace />} />
        <Route path="/downloads.html" element={<Navigate to="/#hero" replace />} />
        <Route path="/license" element={<Navigate to="/#open-source" replace />} />
        <Route path="/license.html" element={<Navigate to="/#open-source" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
