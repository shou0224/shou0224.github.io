import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound'
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
