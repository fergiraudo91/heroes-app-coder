import React from 'react'
import { HeroesList } from '../HeroesList/HeroesList'

export const DCScreen = () => {
    return (
        <div className="container mt-3">
            <h1>DC Screen</h1>
            <hr />
            <HeroesList publisher="DC Comics" />
        </div>
    )
}
