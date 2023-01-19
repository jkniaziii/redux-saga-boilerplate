import React from 'react';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Users from './components/users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
          <Route path="/user" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
