import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { DCScreen } from '../components/DCScreen/DCScreen';
import { HeroDetail } from '../components/HeroDetail/HeroDetail';
import { MarvelScreen } from '../components/MarvelScreen/MarvelScreen';
import { Navbar } from '../components/Navbar/Navbar';

export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={MarvelScreen} />
                    <Route path="/marvel" exact component={MarvelScreen} />
                    <Route path="/dc" exact  component={DCScreen} />
                    <Route path="/heroe/:id" exact component={HeroDetail} />
                </Switch>
            </Router>
        </div>
    )
}
