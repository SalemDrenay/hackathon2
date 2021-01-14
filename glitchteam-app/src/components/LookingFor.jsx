import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import '../assets/css/styles.css';

function LookingFor() {const options = [
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
        <div className="home-looking">
            <h2>Je recherche</h2>
            <form className="home-form">
                <Select options={options} placeholder="Spécialités" className="home-form-select" />
                <Link to={`/join`}>
                <input type="submit" value="Envoyer" className="home-page-validate" />
                </Link>
            </form>
            <div className="home-filters">
                <Link to={`/join`} className="filter-card filter-art">
                    <h3>Arts plastiques</h3>
                </Link>
                <Link to={`/join`} className="filter-card filter-cuisine">
                    <h3>Cuisine</h3>
                </Link><Link to={`/join`} className="filter-card filter-animaux">
                    <h3>Animaux</h3>
                </Link>
                <Link to={`/join`} className="filter-card filter-bricolage">
                    <h3>Bricolage</h3>
                </Link>
            </div>
        </div>
    )
}

export default LookingFor;