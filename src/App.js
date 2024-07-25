import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeoManager from './components/SeoManager';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { allStatesKeywords, generalKeywords, serviceSpecificKeywords } from './keywords';

// Lazy load components
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Services = lazy(() => import('./components/Services'));
const Professional = lazy(() => import('./components/Professional'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const combinedKeywords = [
  ...Object.values(allStatesKeywords).flat(),
  ...generalKeywords,
  ...serviceSpecificKeywords
];

const App = () => {
  console.log('App rendered');
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SeoManager
                page="home"
                keywords={combinedKeywords}
                title="Home - Beautiful Wedding Photography"
                description="Explore our home page to see the best of our wedding photography services, portfolio, and more."
              />
              <Home />
              <Portfolio />
              <Services />
              <Professional />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/portfolio" element={
            <>
              <SeoManager
                page="portfolio"
                keywords={combinedKeywords}
                title="Portfolio - Stunning Wedding Photography"
                description="Check out our portfolio to view a collection of beautiful wedding photography and see our work in action."
              />
              <Portfolio />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <SeoManager
                page="services"
                keywords={combinedKeywords}
                title="Services - Wedding Photography Services"
                description="Learn more about the wedding photography services we offer, including pre-wedding, post-wedding, and destination shoots."
              />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <SeoManager
                page="about"
                keywords={combinedKeywords}
                title="About Us - Wedding Photography Experts"
                description="Find out more about our wedding photography team, our approach, and why we are the experts in capturing your special moments."
              />
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <SeoManager
                page="contact"
                keywords={combinedKeywords}
                title="Contact Us - Get in Touch for Wedding Photography"
                description="Contact us for inquiries, quotes, or to book your wedding photography session. We're here to help with all your needs."
              />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
