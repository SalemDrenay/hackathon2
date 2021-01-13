import React from 'react';
import '../assets/css/styles.css';

import LookingFor from './LookingFor';
import Transmit from './Transmit';

import burger from '../assets/images/menu.png';

function Home() {
    return (
        <div className="home-page">
            <div className="home-topbar">
                <a href="#lookingfor" className="home-topbar-button home-topbar-looking">
                    <p>Recherche</p>
                </a>
                <a href="#transmit" className="home-topbar-button home-topbar-transmit">
                    <p>Proposition</p>
                </a>
                <div className="burger-menu">
                    <img id="burger-up" src={burger} alt="icon-menu-burger" />
                    <img id="burger-down" src={burger} alt="icon-menu-burger" />
                </div>

                <div id="contentMobile">
                  <ul id="sommaireMobile"> 
                    <li> <a class="li-navMobile" href="#lookingfor"> Je recherche  </a> </li>
                    <li> <a class="li-navMobile" href="#transmit"> Je transmets </a> </li>
                    <li> <a class="li-navMobile" href="#disconnect"> Déconnexion </a> </li>
                 </ul>
                </div>
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