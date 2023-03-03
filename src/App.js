import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/pages/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="react-portfolio-new">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/react-portfolio-new/" element={<Home />} />
          <Route path="/react-portfolio-new/about" element={<About />} />
          <Route path="/react-portfolio-new/blog" element={<Blog />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/react-portfolio-new/contact/*" element={<Contact />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
    
  );
}

export default App;

