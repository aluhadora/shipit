import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/menu';
import ActivityBar from './Components/activity_bar';

function App() {
  return (
    <div className="App">

      <Menu />
      <ActivityBar />
    </div>
  );
}

export default App;