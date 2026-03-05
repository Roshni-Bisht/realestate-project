import React from 'react';

const PropertyCard = ({ property }) => {
    // Destructure properties from the Django API response
    const { title, location, price, bedrooms, bathrooms, area_sqft, image_url, listing_type } = property;
    
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(price);

    return (
        // Apply your design here, using Bootstrap classes or custom CSS
        <div className="col-md-4 mb-4">
            <div className="card shadow-sm h-100">
                {/* Use the image_url directly, which can be a Google image address */}
                <img src={image_url} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
                
                <div className="card-body">
                    <span className={`badge bg-${listing_type === 'SALE' ? 'success' : 'info'} mb-2`}>
                        {listing_type}
                    </span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text text-muted small">{location}</p>
                    <h4 className="text-primary">{formattedPrice}</h4>
                    
                    <div className="d-flex justify-content-between align-items-center mt-3 border-top pt-2">
                        <small className="text-muted">{bedrooms || '-'} Bed</small>
                        <small className="text-muted">{bathrooms || '-'} Bath</small>
                        <small className="text-muted">{area_sqft} Sqft</small>
                    </div>
                </div>
                <div className="card-footer bg-white border-0">
                    <button className="btn btn-sm btn-outline-primary w-100">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;