import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from "./components";
import { Home, ComingSoon } from "./pages";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<ComingSoon />} />
          <Route path="/schedule" element={<ComingSoon />} />
          <Route path="/trainers" element={<ComingSoon />} />
          <Route path="/pricing" element={<ComingSoon />} />
          <Route path="/ai-coach" element={<ComingSoon />} />
          <Route path="/stories" element={<ComingSoon />} />
          {/* Catch all route */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;