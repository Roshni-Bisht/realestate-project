import React from 'react';
import '../styles/services.css'; // Make sure this path is correct: ../styles/services.css

// 1. IMPORT YOUR LOCAL IMAGES HERE
// The name on the left (e.g., BuySellImg) is the variable you will use in the code.
// The path on the right should correctly point to your assets folder within src.
import BuySellImg from '../assets/BuySellProperty.jpg';
import RentLeaseImg from '../assets/RentLeaseProperty.jpg';
import CommercialImg from '../assets/CommercialProperty.jpg';


const ServiceCard = ({ title, imageSrc }) => (
  <div className="service-card rounded-lg overflow-hidden">
    <div className="image-container">
      {/* imageSrc is now the imported image variable */}
      <img src={imageSrc} alt={title} className="service-image" />
    </div>
    <p className="card-title">{title}</p>
    <button className="learn-more-btn">Learn more</button>
  </div>
);

const ServicesSection = () => {
  // 2. USE THE IMPORTED VARIABLES IN THE servicesData ARRAY
  const servicesData = [
    { 
      title: "Buy Or Sell Property", 
      // Replace the string path with the imported image variable
      imageSrc: BuySellImg 
    },
    { 
      title: "Rent Or Lease Property", 
      imageSrc: RentLeaseImg
    },
    { 
      title: "Commercial Properties", 
      imageSrc: CommercialImg
    },
  ];

  return (
    <section className="services-section-container">
      <div className="services-header">
        <h2 className="services-title">
          <span className="title-highlight">Our</span> Services
        </h2>
        <p className="services-tagline">
          Tailored Solutions by Expert Real Estate Agents
        </p>
      </div>

      <div className="services-cards-wrapper">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.title}
            imageSrc={service.imageSrc} 
          />
        ))}
      </div>
      
      {/* Floating WhatsApp Button Placeholder
      <a 
        href="https://wa.me/yourphonenumber" 
        className="whatsapp-float-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-icon">💬</span>
      </a> */}
    </section>
  );
};

export default ServicesSection;
