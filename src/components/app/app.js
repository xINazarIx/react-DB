import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../header';

import ErrorBoundary from '../error-boundary/ErrorBoundary';

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import PlanetsPage from '../planets-page';
import StarshipPage from '../starships-page';
import PeoplePage from '../people-page';
import RandomPlanet from '../random-planet/random-planet';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <SwapiServiceProvider value={this.swapiService}>
            <div className="stardb-app">
              <Header />           
              <RandomPlanet />
            
              <Routes>
                <Route path='/' element={<h1>Welcome to starDB</h1>} />
                <Route path='/people' element={<PeoplePage />} />
                <Route path='/planets' element={<PlanetsPage />} />
                <Route path='/starships' element={<StarshipPage />} />
              </Routes>

            </div>
          </SwapiServiceProvider>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}
