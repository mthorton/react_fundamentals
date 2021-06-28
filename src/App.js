import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// import FunctionalComponentDemo from './components/concepts/FunctionalComponents/FunctionalComponentsDemo';

import Footer from './components/site/Footer';
import Header from './components/site/Header';
import Sidebar from './components/site/Sidebar';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

/*
NOTES:

1. re-install reactstrap "npm i -S reactstrap" if error: "can't resolve reactstrap"

*/
