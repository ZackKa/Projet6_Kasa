import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Logements from './pages/Logements';
import About from './pages/About';
import Error from './pages/Error';
import './sass/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logements/:id" element={<Logements />} />
        <Route path='/About' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);