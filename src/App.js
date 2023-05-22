import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound'
import Profile from './components/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
