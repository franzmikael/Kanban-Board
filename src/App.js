import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Board from './pages/Board';
import './assets/scss/style.scss';

function App() {
  return (

    <div className="App">
      <Router basename="/v1">
        <Routes>
          <Route path='/' element={<Board/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
