import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import "./Loading.css"

const LoadingAnimation = () => {
  const [progress, setProgress] = useState(1); // Initial progress state
  const navigate = useNavigate();

  useEffect(() => {
    gsap.to(".loadingnum", {
      duration: 5, // Duration of the loading animation (in seconds)
      onUpdate: () => {
        setProgress(prev => (prev < 100 ? prev + 1 : 100)); // Update the progress
      },
      repeat: 0, // No repeats
      //  backgroundColor:"rgb(24,36,56)",
       height:"100vh",
       width:"100vw",

    });
    setTimeout(()=>{navigate("/next")},5000)
  }, []);


  return (
    <div className="outer-container4">
    <div className='loadingnum'>
      <div className="lines">
      <h2>ENCRYPTED CHAT</h2>
      <h2>AND</h2>
      <h2>DOCUMENT SHARING</h2>
    </div>
      <div className='loadingbar'>
        </div>
      <p className='para'> {progress}%</p>
    </div>
    </div>
  );
};

export default LoadingAnimation;
