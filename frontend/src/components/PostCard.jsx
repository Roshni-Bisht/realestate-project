// src/components/PostCard.js (Final Clean Version)
import React from 'react';
import '../custom.css'; 

const PostCard = ({ post }) => {
  // Defensive check for the error you experienced
  if (!post) {
      return null;
  }
  
  const postUrl = `/blog/${post.slug}`; 
  const imageUrl = post.image || 'https://via.placeholder.com/600x400?text=Blog+Post+Image'; 

  return (
    <div className="card shadow-lg border-0 h-100"> 
      
      {/* 1. Image Section: ONLY the background image is rendered */}
      <a 
        href={postUrl} // Make the entire image clickable
        className="position-relative d-block" // d-block ensures the anchor tag covers the area
        style={{ 
            height: '224px', // Fixed Height
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer'
        }}
        aria-label={post.title} // Accessibility for the link
      >
        {/* All text, overlays, and gradients are removed */}
      </a>
      
      {/* 2. Content Section */}
      <div className="card-body d-flex flex-column p-4">
        
        {/* Title Below Image: Fixed height */}
        <h3 className="h5 fw-bold text-dark mb-3" style={{ height: '3.5rem', overflow: 'hidden' }}>
          {post.title}
        </h3>
        
        {/* Meta Data (Likes/Comments/Date) */}
        <div className="d-flex align-items-center small text-muted mb-3">
          <span className="me-4 d-flex align-items-center">
            {/* Placeholder for a Like Icon (using an SVG) */}
            <svg className="bi me-1" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M12.166 8.94c-.595.632-1.39 1.077-2.31 1.077-.92 0-1.715-.445-2.31-1.076L8 9.389l-1.546-1.66A3.899 3.899 0 0 1 4.14 7.514C2.378 7.514 1 5.86 1 3.75 1 2.015 2.15 1 3.5 1s2.5 1.015 2.5 2.75c0 2.11 1.378 3.75 3.14 3.75 1.762 0 3.14-1.64 3.14-3.75C12 2.015 13.15 1 14.5 1s2.5 1.015 2.5 2.75c0 2.11-1.378 3.75-3.14 3.75-.92 0-1.715-.445-2.31-1.076z"></path></svg>
            +{post.likes || 0}
          </span>
          <span className="me-4 text-secondary small">
            {post.comments || 'No'} Comment
          </span>
          <span className="text-secondary small">
            {post.meta_date}
          </span>
        </div>

        {/* Content Snippet: Fixed height for 2 lines of text */}
        <p className="card-text text-secondary small mb-3 flex-grow-1" style={{ 
            overflow: 'hidden', 
            display: '-webkit-box', 
            WebkitLineClamp: 2, 
            WebkitBoxOrient: 'vertical',
            height: '2.5rem'
        }}>
          {post.snippet}
        </p>
        
        {/* Read More Link */}
        <a
          href={postUrl}
          className="text-decoration-none text-luxury-accent small fw-bold border-bottom border-luxury-accent d-inline-block mt-auto"
          style={{ width: 'fit-content' }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default PostCard;