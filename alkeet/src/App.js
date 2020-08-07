import React from 'react';
import Course from './components/Course';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React Alkeet Demoja</h1>
      </header>
      <Course name='Tiina Partanen' coursetitle='Ohjelmointikielet' classroom='2074'/>
    </div>
  );
}

export default App;
