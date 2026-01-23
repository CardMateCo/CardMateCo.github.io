import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PrivacyPolicy from './PrivacyPolicy'
import TermsOfUse from './TermsOfUse'
import Home from './Home'
import FAQ from './FAQ'
import Footer from './components/Footer'
import TopBar from './components/TopBar'


import FloatingBeers from './components/FloatingBeers'

function App() {
    return (
        <Router>
            <FloatingBeers
                count={15}
                opacity={0.3}
                minScale={1.1}
                maxScale={1.8}
                icons={['🍺']}
                duration={10000}
            />
            <TopBar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfUse />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
