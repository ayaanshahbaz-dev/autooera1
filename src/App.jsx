import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Engineering from './pages/Engineering';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import Studio from './pages/Studio';
import Insights from './pages/Insights';
import InsightPost from './pages/InsightPost';
import Contact from './pages/Contact';
import Demo from './pages/Demo';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
