import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import Work from './components/pages/Work';

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <div className=''>
          <Navbar />
        </div>
        <div className=''>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />} />
            <Route path='/work' element={<Work />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
