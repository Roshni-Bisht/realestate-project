import React from 'react';
import HeroSection from '../components/HeroSection'; 
import ServicesSection from '../components/ServicesSection'; // Correctly imports the services component
import ContactFormMap from '../components/ContactFormMap';
import Footer from '../components/Footer';

// NOTE: All mockProperties, Container, Row, Col imports, and the featured properties H2 and mapping logic 
// have been removed to clean up the file and focus on the services section.

const Home = () => {
    return (
        <div className="bg-white">
            {/* Top of the page */}
            <HeroSection /> 

            {/* INTEGRATED: The services section based on your image goes here */}
            <ServicesSection />
            
            {/* Lower sections of the page */}
            <ContactFormMap />
            
            <Footer />
        </div>
    );
};

export default Home;
