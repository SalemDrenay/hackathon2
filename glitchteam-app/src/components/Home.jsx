import React from 'react';
import '../assets/css/styles.css';

function Home() {
    return (
        <div className="home-page">
            <div className="home-topbar">
                <div className="home-topbar-looking">
                    <p>Recherche</p>
                </div>
                <div className="home-topbar-transmit">
                    <p>Proposition</p>
                </div>
            </div>    
        </div>    
    )
}

export default Home;