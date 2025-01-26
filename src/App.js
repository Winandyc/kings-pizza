import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './modules/Home';
import About from './modules/About';
import Subscription from './modules/Subscription';
import Menu from './modules/Menu';
import { Pizzeria } from './components/Pizzeria';
import { Snacking } from './components/Snacking';
import { Extra } from './components/Extra';
import NotFound from './modules/NotFound';
import LegalesNotices from './components/LegalesNotices';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router basename="/kings-pizza">
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/pizzeria" element={<Pizzeria />} />
            <Route path="/menu/snacking" element={<Snacking />} />
            <Route path="/menu/extra" element={<Extra />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/about" element={<About />} />
            <Route path="/LegalesNotices" element={<LegalesNotices />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
