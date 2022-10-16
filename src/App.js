import React, { useContext } from 'react';

import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import ScrollButton from './components/ScrollButton';
import Services from './components/Services';
import GlobalContext from './context/GlobalContext';

function App() {
  const { scrollTopVisible } = useContext(GlobalContext);

  return (
    <React.Fragment>
      <Header />
      <Banner />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      {scrollTopVisible && <ScrollButton />}
    </React.Fragment>
  );
}

export default App;
