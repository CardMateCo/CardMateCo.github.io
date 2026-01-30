import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="card home-card">
            <h1 className="hero-title">BEERMATE</h1>
            <p className="hero-subtitle">Din bästa vän till förfesten!</p>

            <div className="action-container">
                <a
                    href="#ios-guide"
                    className="btn-large"
                    onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById('ios-guide');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                >
                    <div className="btn-large-icon"></div>
                    <div className="btn-large-text">iOS Download</div>
                    <div className="btn-large-sub" style={{ color: '#E69B00' }}>Best Performance</div>
                </a>
                <a
                    href="https://beermate.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-large"
                >
                    <div className="btn-large-icon">🌐</div>
                    <div className="btn-large-text">Web App</div>
                    <div className="btn-large-sub">No install needed</div>
                </a>
            </div>

            <div className="screenshot-section">
                <div className="screenshot-title">
                    <span>📱</span> App Previews
                </div>
                <div className="screenshot-marquee">
                    <div className="screenshot-track">
                        {/* Double the list for seamless infinite scroll */}
                        {[...['Menu', 'Bussen', 'Die', 'HigherLower', 'Mines'], ...['Menu', 'Bussen', 'Die', 'HigherLower', 'Mines']].map((img, index) => (
                            <div key={index} className="screenshot-item">
                                <img
                                    src={`${import.meta.env.BASE_URL}screenshots/${img}.png`}
                                    alt={`${img} Preview`}
                                    className="screenshot-img"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="ios-guide" className="install-guide" style={{ scrollMarginTop: '100px' }}>
                <h3 style={{ marginBottom: '3rem', opacity: 0.8 }}>Get Started on iOS</h3>
                <div className="step-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h4>Install AltStore</h4>
                        <p>The world's most popular alternative app store for iOS.</p>
                        <a href="https://altstore.io/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Get AltStore
                        </a>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h4>Install BEERMATE</h4>
                        <p>Once AltStore is ready, click below to install BEERMATE.</p>
                        <a href="altstore://source?url=https://home.beermate.se/altstore.json" className="btn-primary">
                            Get BEERMATE
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home 