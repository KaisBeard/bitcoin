import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  return (
    <div className="coin-app">
      <div className="coin-search">
      <h1 className="coin-text">Search a currency</h1>
       <form>
        <input type="text" placeholder="Search" className="coin-input"/>

       </form>
    </div>
    </div>
  );
}

export default App;
