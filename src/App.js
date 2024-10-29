
import './App.css';
import Firstnav from './Component/Firstnav';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Secondnav from './Component/Secondnav';
import Home from './Component/Home';
import { useState } from 'react';
import Loancalculator from './Component/Loancalculator';

function App() {



  return (
    <div className="App">
      
      <Router>
      <Firstnav/>
      <Secondnav />
      <Home />
      <Loancalculator/>
        <Routes>
          {/* <Route  /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
