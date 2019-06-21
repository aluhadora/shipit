import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/menu';
import ActivityBar from './Components/activity_bar';
import LeaderBoard from './Components/leaderboard';
import Leaderboards from './Components/Leaderboards/leaderboards';
import PopularSongs from './Components/Leaderboards/popular_songs';

function App() {
  return (
    <div className="App">

      <Menu />
      <ActivityBar />
      <Leaderboards />
    </div>
  );
}

export default App;
