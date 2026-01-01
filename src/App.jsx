import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import JobPromotions from './components/JobPromotions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark';
import AnimatedCursor from './components/AnimatedCursor';

function App() {
  return (
    <div className="app">
      <AnimatedCursor />
      <ClickSpark sparkColor='#fff' sparkSize={4} sparkRadius={25} sparkCount={8} duration={500}>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <JobPromotions />
          <Contact />
        </main>
        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
