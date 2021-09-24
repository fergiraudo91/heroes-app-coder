import React from 'react'
import { HeroesList } from '../HeroesList/HeroesList'

export const MarvelScreen = () => {
    return (
        <div className="container mt-3">
            <h1>Marvel Screen</h1>
            <hr />
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}
