import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'

import NavBar from './components/NavBar';
import HomepageContainer from './containers/HomepageContainer';
import FitnessActivitiesContainer from './containers/FitnessActivitiesContainer';
import RecipesContainer from './containers/RecipesContainer';
import HobbiesContainer from './containers/HobbiesContainer';
import LivestreamsContainer from './containers/LivestreamsContainer';

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
        <header className="App-header">
          <p>
            Welcome to the Quarantine Activity Tracker!
          </p>
        </header>
        <main>
          <Route exact path='/' component={HomepageContainer} />
          <Route exact path='/fitnessactivities' component={FitnessActivitiesContainer} />
          <Route exact path='/recipes' component={RecipesContainer} />
          <Route exact path='/hobbies' component={HobbiesContainer} />
          <Route exact path='/livestreams' component={LivestreamsContainer} />
        </main>
      </div>
    </Router>
  );
}

export default App;
