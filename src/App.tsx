import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import EmailManagement from './components/EmailManagement';
import SmartScheduling from './components/SmartScheduling';
import NotionIntegration from './components/NotionIntegration';
import GoogleDocsIntegration from './components/GoogleDocsIntegration';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <EmailManagement />
      <SmartScheduling />
      <NotionIntegration />
      <GoogleDocsIntegration />
      <HowItWorks />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
}

export default App;