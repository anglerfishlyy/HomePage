import { useState, useEffect } from 'react'
import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.png';
import img4 from './assets/4.png';

import './App.css'

function App() {
   const [currentLogo, setCurrentLogo] = useState(0);
  
  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentLogo(prev => (prev + 1) % 4);
      }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
      const moveCursor = (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

        //  delay to dot for trailing effect

        setTimeout(() => {
          cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        }, 100);
        // Hide normal basic pointer
        document.body.style.cursor = "none";
      };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="app">
      
      {/* better Cursor */}
      <div className="custom-cursor"></div>
      <div className="cursor-dot"></div>

      {/* Navbar */}

      <nav>
        <div className="logo">EIGHTGEN</div>
        <div className="nav-links">
          <a href="https://eightgen.ai/about/">ABOUT</a>
          <a href="https://eightgen.ai/category/blog/">INSIGHTS</a>
          <a href="#contact">CONTACT US</a>
        </div>
      </nav>

      {/* Main Content */}

      <main>

        <div className="logo-container">
          <img 
            src={img1} 
            alt="Logo 1"
            className={currentLogo === 0 ? 'visible' : ''} 
          />
          <img 
            src={img2}
            alt="Logo 2"
            className={currentLogo === 1 ? 'visible' : ''} 
          />
          <img 
            src={img3}
            alt="Logo 3"
            className={currentLogo === 2 ? 'visible' : ''} 
          />
          <img 
            src={img4}
            alt="Logo 4"
            className={currentLogo === 3 ? 'visible' : ''} 
          />
        </div>

        <h1>AI-Powered Search: <span style={{ color: '#ffffff' }}>Your Data</span>, <span>Smarter</span></h1>
        <p>AI-driven solutions for smarter search and stronger online presence</p>

        <button>TRy DEMO</button>

      </main>
    </div>
  );
}

export default App;