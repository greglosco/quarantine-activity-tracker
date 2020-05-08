import React from 'react';
import logo from './logo.svg';
import './App.css';
import FitnessActivitiesContainer from './containers/FitnessActivitiesContainer';
import RecipesContainer from './containers/RecipesContainer';
import HobbiesContainer from './containers/HobbiesContainer';
import LivestreamsContainer from './containers/LivestreamsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Quarantine Activity Tracker!
        </p>
      </header>
      <main>
        <FitnessActivitiesContainer />
        <RecipesContainer />
        <HobbiesContainer />
        <LivestreamsContainer />
      </main>
    </div>
  );
}

export default App;
