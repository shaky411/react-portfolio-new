import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import Gallery from './components/pages/Gallery';




function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="/react-portfolio-new">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio-new/" element={<Home />} />
          <Route path="/react-portfolio-new/about" element={<About />} />
          <Route path="/react-portfolio-new/projects" element={<Projects />} />
          <Route path="/react-portfolio-new/gallery" element={<Gallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react-portfolio-new/contact/*" element={<Contact />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;

