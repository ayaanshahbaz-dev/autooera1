import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TechGrid from './sections/TechGrid';
import Problem from './sections/Problem';
import Systems from './sections/Systems';
import ConnectedSystem from './sections/ConnectedSystem';
import AutomationFlow from './sections/AutomationFlow';
import Process from './sections/Process';
import Projects from './sections/Projects';
import Capabilities from './sections/Capabilities';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <TechGrid />
        <Problem />
        <Systems />
        <ConnectedSystem />
        <AutomationFlow />
        <Process />
        <Projects />
        <Capabilities />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
