import React from 'react';
import '../assets/css/styles.css';

import burger from '../assets/images/menu.png';

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
        </div>    
    )
}

export default Home;