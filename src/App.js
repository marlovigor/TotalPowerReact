import React from 'react';
import Header from './components/Header';
import Navebar from './components/Navbar';
import Training from './components/Training';
import Athletes from './components/Athletes';
import MediaQuery from 'react-responsive';

import './App.css';


function App() {
  return (
    
    <div  className="App">
   
     <Header />
     <Navebar />
     <Training />
     <Athletes />
    </div>

  );
}

export default App;
