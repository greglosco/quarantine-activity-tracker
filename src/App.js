import React from 'react';
import logo from './logo.svg';
import './App.css';

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
