import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import TechGrid from './sections/TechGrid';

// Below-the-fold sections: code-split to reduce initial JS bundle
const Problem = lazy(() => import('./sections/Problem'));
const Systems = lazy(() => import('./sections/Systems'));
const ConnectedSystem = lazy(() => import('./sections/ConnectedSystem'));
const AutomationFlow = lazy(() => import('./sections/AutomationFlow'));
const Process = lazy(() => import('./sections/Process'));
const Projects = lazy(() => import('./sections/Projects'));
const Capabilities = lazy(() => import('./sections/Capabilities'));
const Pricing = lazy(() => import('./sections/Pricing'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Faq = lazy(() => import('./sections/Faq'));
const Footer = lazy(() => import('./components/Footer'));
const ChatWidget = lazy(() => import('./components/ChatWidget'));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <TechGrid />
        <Suspense fallback={null}>
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
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default App;

