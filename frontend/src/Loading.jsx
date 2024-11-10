import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import "./Loading.css"

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(1); // Initial progress state

  useEffect(() => {
    gsap.to(".loadingnum", {
      duration: 3, // Duration of the loading animation (in seconds)
      onUpdate: () => {
        setProgress(prev => (prev < 100 ? prev + 1 : 100)); // Update the progress
      },
      repeat: 0, // No repeats
       backgroundColor:"rgb(24,36,56)",
       height:"90vh",
       width:"90vw",

    });

   <Router>
     <Link to="/"></Link>
     <Routes></Routes>
   </Router>

  }, []);

  return (
    <div className='loadingnum'>
      Loading... {progress}%
    </div>
  );
};

export default LoadingAnimation;
