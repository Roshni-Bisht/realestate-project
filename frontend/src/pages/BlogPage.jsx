// src/pages/BlogPage.js 
import React, { useState } from 'react';
import PostCard from '../components/PostCard'; 
import BlogHero from '../components/BlogHero'; 
// import Navbar from '../components/Navbar'; 

// 🚨 IMPORT ALL 13 CARD IMAGE ASSETS (omitted for brevity) 🚨
import DhanterasImage from '../assets/dhanteras.jpg'; 
import GrihaPraveshImage from '../assets/griha_pravesh.jpg';
import MetroMapImage from '../assets/metro_map.jpg'; 
import PropertyInvestingImage from '../assets/new_property.jpg'; 

import BedroomDesignImage from '../assets/bedroom_design.jpg';
import RBIMonetaryImage from '../assets/rbi_monetary.jpg';
import TallestBuildingsImage from '../assets/tallest_buildings.jpg';
import AgentsBangaloreImage from '../assets/agents_bangalore.jpg';
import AgentsNoidaImage from '../assets/agents_noida.jpg';
import AgentsGurgaonImage from '../assets/agents_gurgaon.jpg';
import BuildersIndiaImage from '../assets/builders_india.jpg';
import TaxesUAEImage from '../assets/taxes_uae.jpg';
import RealEstateCompaniesImage from '../assets/real_estate_companies.jpg';


const BlogPage = () => {
  // COMPLETE MOCK DATA FOR ALL 13 POSTS (omitted for brevity)
  const mockPosts = [
    { id: 9, title: 'Top 10 Real Estate Agents in Gurgaon | Property Dealers |...', slug: 'agents-gurgaon', image: AgentsGurgaonImage, snippet: 'Table of Contents Gurgaon, a bustling city in India, boasts a vibrant real estate market with top-notch agents facilitating property transactions. T...', meta_date: '26-10-2025', likes: 2, comments: 'No' },
{ id: 4, title: 'Top Bedroom Interior Design Ideas - Upgrade your Sacre...', slug: 'bedroom-interior-design', image: BedroomDesignImage, snippet: 'Table of Contents One of the sacred spaces in every home is the bedroom. It is a place where we spend most of our time and where we begin and end our...', meta_date: '26-10-2025', likes: 1, comments: 'No' },
    { id: 5, title: 'RBI Monetary Policy- Home Loan EMI Unchanged as Repo Rate Remains Unchanged for 10 Consecutive Time', slug: 'rbi-repo-rate', image: RBIMonetaryImage, snippet: 'Table of Contents For the 10th consecutive time, the Reserve Bank of India (RBI) has maintained the same repo rate of 6.5 per cent in its bi-monthly M...', meta_date: '26-10-2025', likes: 1, comments: 'No' },
   
    { id: 13, title: 'Top 5 Things To Remember Before Investing In New Property', slug: 'new-property-investing', image: PropertyInvestingImage, snippet: 'Table of Contents The procedure of purchasing a home has significantly improved. The real estate industry is now better organized, open, and superv…', meta_date: '26-10-2025', likes: 8, comments: 'One' },
    { id: 10, title: 'List of Top 10 Builders & Developers in India', slug: 'top-builders-india', image: BuildersIndiaImage, snippet: 'Table of Contents India is home to one of the best builders and developers in India that offer better housing facilities. These developers offer well-...', meta_date: '26-10-2025', likes: 3, comments: 'No' },

    { id: 1, title: 'The Significance of Dhanteras: Celebrating Wealth and Prosperity in Luxury Residences', slug: 'dhanteras-celebration', image: DhanterasImage, 
      snippet: 'Table Of Contents The festival of Dhanteras sets the stage for the grand Diwali celebrations. As the name suggests, Dhanteras falls on the thirteenth...', meta_date: '24-10-2025', likes: 11, comments: 'No' },
    { id: 2, title: 'Subh Griha Pravesh Muhurat in 2024-25 (Month-Wise)...', slug: 'griha-pravesh-muhurat', image: GrihaPraveshImage, 
      snippet: 'Table Of Contents A house is a temple where we invite positivity that helps us to lead a peaceful life. In Hindu culture, time is the most valuable as...', meta_date: '24-10-2025', likes: 24, comments: 'No' },
    { id: 3, title: 'Complete Insight on Bangalore Metro Map-...', slug: 'bangalore-metro-map', image: MetroMapImage, 
      snippet: 'Table of Contents Bangalore, now officially known as Bengaluru and fondly referred to as Namma Ooru (our city), introduced the Namma Metro (our metro)...', meta_date: '24-10-2025', likes: 24, comments: 'No' },
     { id: 6, title: 'List of Tallest Buildings in Gurgaon- Your Next...', slug: 'tallest-buildings-gurgaon', image: TallestBuildingsImage, snippet: 'Table of Contents If you are looking for the tallest buildings in Gurgaon, you will find such residential projects that are either ready to move or co...', meta_date: '26-10-2025', likes: 1, comments: 'No' },
    { id: 7, title: 'Top 10 Real Estate Agents in Bangalore | Property Dealers |...', slug: 'agents-bangalore', image: AgentsBangaloreImage, snippet: 'Table of Contents Bangalore is a bustling metropolis in southern India, is renowned for its vibrant real estate market. The city\'s real estate a...', meta_date: '26-10-2025', likes: 2, comments: 'No' },
    { id: 8, title: 'Top 10 Real Estate Agents in Noida | Property Dealers |...', slug: 'agents-noida', image: AgentsNoidaImage, snippet: 'Table of Contents Noida, a bustling city in northern India, boasts a dynamic real estate market, attracting homebuyers with its modern infrastructure ...', meta_date: '26-10-2025', likes: 2, comments: 'No' },
    { id: 12, title: 'Top 10 Best Real Estate Companies In India', slug: 'top-companies-india', image: RealEstateCompaniesImage, snippet: 'Table of Contents Real Estate in India is one of the most profitable industries in the country. With a list of high-end players, the industry is expec...', meta_date: '26-10-2025', likes: 1, comments: 'No' },
  ];
  
 const [posts] = useState(mockPosts);

  return (
    <div className="min-vh-100 bg-white">
      <BlogHero /> 
      
      <div className="container-fluid px-3 py-5">
        {/* 🚀 FIX: Changed horizontal gutter from gx-2 to gx-4 to increase spacing between cards */}
        <div className="row gx-6 gy-4"> 
          {posts.map((post) => (
            <div className="col-12 col-md-6 col-lg-4" key={post.id}>
              <PostCard post={post} /> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;