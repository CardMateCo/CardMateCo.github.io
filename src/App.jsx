import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import TopBar from './components/TopBar'
import ScrollToTop from './components/ScrollToTop'
import AnimatedRoutes from './components/AnimatedRoutes'

import FloatingBeers from './components/FloatingBeers'

function App() {
    return (
        <Router>
            <ScrollToTop />
            <FloatingBeers
                count={15}
                opacity={0.3}
                minScale={1.1}
                maxScale={1.8}
                icons={['🍺']}
                duration={10000}
            />
            <TopBar />

            <AnimatedRoutes />
            <Footer />
        </Router>
    )
}

export default App
