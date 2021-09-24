import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { getHeroById } from '../../utils/getHeroById';
import './HeroDetail.css';

export const HeroDetail = () => {

    const { id } = useParams();

    const heroDetail = getHeroById(id);

    let path = '/';
    
    if(heroDetail.publisher === "DC Comics"){
        path = '/dc';
    }

    return (
        <div className="container mt-3">
            <h1>{heroDetail.superhero}</h1>
            <div className="hero-detail-container">
                <div className="image-container">
                    <img src={`/assets/heroes/${id}.jpg`} alt={heroDetail.superhero} />
                </div>
                <div className="description-container">
                    <h3>Real Name: {heroDetail.alter_ego}</h3>
                    <h5>Publisher: {heroDetail.publisher}</h5>
                    <h5>Primera aparición: {heroDetail.first_appearance}</h5>
                    <h5>Personajes: {heroDetail.characters}</h5>
                </div>
            </div>
            <Link className="btn btn-success mt-3" to={path}>Volver</Link>
        </div>
    )
}
