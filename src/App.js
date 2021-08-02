import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import ThePulseCaseStudy from './pages/ThePulseCaseStudy';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/the-pulse-case-study" component={ThePulseCaseStudy} exact/>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
