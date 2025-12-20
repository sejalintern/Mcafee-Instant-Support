import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToActionSticky from './components/CallToActionSticky';
import { useAppContext } from './contexts/AppContext';

function App() {
  const { theme } = useAppContext();

  useEffect(() => {
    // Apply theme primary color as a CSS variable for easier use in components
    document.documentElement.style.setProperty('--color-primary', theme.primaryColor);
  }, [theme.primaryColor]);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-mcafee-support-15103701986" element={<About />} />
            <Route path="/mcafee-services-support-15103701986" element={<Services />} />
            <Route path="/contact-mcafee-support-15103701986" element={<Contact />} />
            <Route path="/blog-mcafee-support-15103701986" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin-15103701986" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CallToActionSticky />
      </div>
    </BrowserRouter>
  );
}

export default App;