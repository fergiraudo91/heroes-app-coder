import React from "react";
import { getHeroesByPublisher } from "../../utils/getHeroesByPublisher";
import { Card } from "../Card/Card";
import './HeroesList.css';

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="heroes-container">
      {heroes.map((heroe) => (
        <Card
          key={heroe.id}
          id={heroe.id}
          superhero={heroe.superhero}
          alter_ego={heroe.alter_ego}
        />
      ))}
    </div>
  );
};
