import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import DemoPanel from './components/DemoPanel';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
        <section id="hero" className="pt-24">
          <Hero />
        </section>

        <section id="problem">
          <Problem />
        </section>

        <section id="solution">
          <Solution />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="demo">
          <DemoPanel />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="tech">
          <TechStack />
        </section>

        <section id="roadmap">
          <Roadmap />
        </section>

        <section id="cta">
          <CTA />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
