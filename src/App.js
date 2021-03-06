import React from 'react';
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar.js';
import Training from './components/Training';
import Athletes from './components/Athletes';
import Product from  './components/Product';
import Elemt from './components/Elemt';
import Comps from './components/Comps';
import Rights from  './components/Rights';


import './App.css';


function App() {
  return (
    
    <div  className="App">
     <SocialMedia />
     <Header />
     <Navbar />
     <SearchBar />
     <Training />
     <Athletes />
     {/* <Product />
     <Comps />
     <Rights />  */}
    </div>

  );
}

export default App;
