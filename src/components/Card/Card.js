import React from 'react';
import { Link } from 'react-router-dom';


export const Card = ({superhero, alter_ego, id}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={`/assets/heroes/${id}.jpg`} className="card-img-top" alt="..." />
            <div className ="card-body">
            <h5 className ="card-title">{superhero}</h5>
            <p className ="card-text">{alter_ego}</p>
            <Link to={`/heroe/${id}`} className ="btn btn-primary">Ver más...</Link>
            </div>
        </div>
    )
}