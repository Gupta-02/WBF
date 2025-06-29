import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pillars from './pages/Pillars';
import Initiatives from './pages/Initiatives';
import Join from './pages/Join';
import WBFx from './pages/WBFx';
import Contact from './pages/Contact';
import Login from './pages/Login';
import { useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  
  const getThemeClasses = () => {
    switch (theme) {
      case 'nature':
        return 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950 text-emerald-900 dark:text-emerald-100';
      case 'dark':
        return 'bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white';
      default:
        return 'bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900';
    }
  };

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-500 ${getThemeClasses()}`}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pillars" element={<Pillars />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/join" element={<Join />} />
            <Route path="/wbfx" element={<WBFx />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;