import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartGame from './components/StartGame';
import Gameplay from './components/Gameplay';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/play" element={<Gameplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;