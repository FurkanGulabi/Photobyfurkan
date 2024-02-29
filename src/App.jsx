import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';


function App() {
  useEffect((() => {
    localStorage.clear()
  }), [])

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter={false}>
      <Navbar key="navbar" />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home key="home" />} />
        <Route path='/portfolio' element={<Portfolio key="portfolio" />} />
        <Route path='/blog' element={<Blog key="blog" />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer key="footer" />
    </AnimatePresence>


  );
}

export default App;