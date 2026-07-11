import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TechGrid from './sections/TechGrid';
import Problem from './sections/Problem';
import Systems from './sections/Systems';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-primary text-text-secondary font-sans selection:bg-accent-dim selection:text-accent">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <TechGrid />
        <Problem />
        <Systems />
        {/* Next sections will go here */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
