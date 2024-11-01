// Services.js
import React from 'react';
import './Services.css';

const Services = () => (
    <div className="services-container">
        <h2 className="services-title">My Services</h2>
        <div className="services-cards">
            {["Web Development", "UI Development", "UI Design"].map((service, idx) => (
                <div key={idx} className="card">
                    <div className="card-body">
                        <h3 className="card-title">{service}</h3>
                        <p className="card-text">
                            {`As a ${service}, I create visually engaging and highly functional designs. From responsive websites to seamless interfaces, my goal is to provide users with an enjoyable experience.`}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Services;
