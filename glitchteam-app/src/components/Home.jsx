import React from 'react';
import '../assets/css/styles.css';

import LookingFor from './LookingFor';
import Transmit from './Transmit';

import logo from '../assets/images/logo.png';

function Home() {
    return (
        <div className="home-page">
            <div className="home-topbar">
                <img src={logo} alt="logo de Braincubator" className="topbar-logo"/>
                <nav role="navigation">
                    <div id="menu-toggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                      
                        <ul id="menu">
                            <a href="http://localhost:3000/login">
                                <li>Déconnexion</li>
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="home-Search">
            <a href="#lookingfor" className="home-topbar-button home-topbar-looking">
                    <p>Recherche</p>
                </a>
                <a href="#transmit" className="home-topbar-button home-topbar-transmit">
                    <p>Proposition</p>
                </a>
            </div>
            <div className="home-container home-container-looking" id="lookingfor">
                <LookingFor />
            </div>
            <div className="home-container home-container-transmit" id="transmit">
                <Transmit />
            </div>
        </div>
    )
}

export default Home;