// src/components/BlogHero.js 
import React from 'react';
import HeroBgImage from '../assets/banner.jpg'; 

const BlogHero = () => {
  const backgroundImage = HeroBgImage; 
  
  return (
    <div 
      // The parent div retains position and text color for the heading.
      className="position-relative d-flex align-items-center justify-content-center text-white"
      style={{ 
          height: '300px', 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // 🛑 CRITICAL FIX: Explicitly remove any possible blur or filter 🛑
          filter: 'none' 
      }}
    >
      {/* All overlay/dimming divs have been removed */}
      
      <div className="text-center">
        <h1 className="display-4 fw-normal">
          Blog & News
        </h1>
      </div>
    </div>
  );
};

export default BlogHero;