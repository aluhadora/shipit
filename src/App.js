import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/menu';
import ActivityBar from './Components/activity_bar';
import LeaderBoard from './Components/leaderboard';

function App() {
  return (
    <div className="App">

      <Menu />
      <ActivityBar />
      <LeaderBoard />
    </div>
  );
}

export default App;
