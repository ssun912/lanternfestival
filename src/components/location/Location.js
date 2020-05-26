import React from 'react';
import './location.css';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.388042291172!2d-74.10493178539619!3d40.64337584974937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24e229a8afdc3%3A0xaf927dc8b2dd27b6!2sSnug%20Harbor%20Cultural%20Center%20%26%20Botanical%20Garden!5e0!3m2!1sen!2sus!4v1589772463283!5m2!1sen!2sus"
                    width="100%" height="450px"
                    frameBorder="0" 
                    allowFullScreen
                    tabIndex="0">
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;