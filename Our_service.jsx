import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Our_service.css';
import { FaHotel, FaSpa, FaSwimmer, FaGlassCheers, FaDumbbell } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";

function Our_service() {
    const services = [
        { title: 'Rooms & Apartment', icon: <FaHotel />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
        { title: 'Food & Restaurant', icon: <MdOutlineRestaurant />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
        { title: 'Spa & Fitness', icon: <FaSpa />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
        { title: 'Sports & Gaming', icon: <FaSwimmer />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
        { title: 'Event & Party', icon: <FaGlassCheers />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
        { title: 'GYM & Yoga', icon: <FaDumbbell />, description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.' },
    ];

    return (
        <div className="container text-center my-5">
            <h4 className="text-warning">OUR SERVICES</h4>
            <h2 className="fw-bold mb-4">
                Explore Our <span className="text-warning">SERVICES</span>
            </h2>
            <div className="row" id="fir">
                {services.map((service, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow-sm p-4 rounded-3 service-card bg-light">
                            <div className="card-body">
                                <div className="fs-1 text-warning mb-2">{service.icon}</div>
                                <h5 className="fw-bold">{service.title}</h5>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Our_service;
