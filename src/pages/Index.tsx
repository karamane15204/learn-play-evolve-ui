
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import LearningModes from '../components/LearningModes';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LearningModes />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
