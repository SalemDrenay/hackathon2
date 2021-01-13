import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

function Transmit() {const options = [
        { value: 'animaux', label: 'Animaux' },
        { value: 'artsplastiques', label: 'Arts plastiques' },
        { value: 'bienetre', label: 'Bien-être' },
        { value: 'bricolage', label: 'Bricolage' },
        { value: 'cuisine', label: 'Cuisine' },
        { value: 'informatique', label: 'Informatique' },
        { value: 'jardinage', label: 'Jardinage' },
        { value: 'maison', label: 'Maison' },
        { value: 'mecanique', label: 'Mécanique' },
        { value: 'musique', label: 'Musique' },
        { value: 'soutien', label: 'Soutien scolaire' }
    ]

    return (
        <div className="home-transmit">
            <h2>Je transmets</h2>
            <form className="home-form">
                <Select options={options} placeholder="Spécialités" className="home-form-select" />
                <input type="submit" value="Envoyer" className="home-page-validate" />
            </form>
            <div className="home-filters">
                <Link to={`/home`} className="filter-card filter-mecanique">
                    <h3>Mécanique</h3>
                </Link>
                <Link to={`/home`} className="filter-card filter-musique">
                    <h3>Musique</h3>
                </Link><Link to={`/home`} className="filter-card filter-maison">
                    <h3>Maison</h3>
                </Link>
                <Link to={`/home`} className="filter-card filter-animaux">
                    <h3>Animaux</h3>
                </Link>
            </div>
        </div>    
    )
}

export default Transmit;