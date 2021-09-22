import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import HowWorks from './components/HowWorks';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowWorks />
      <AboutUs />
      <Services />
    </>
  )
}

export default App;
