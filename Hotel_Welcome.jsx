import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHotel, FaUsersCog, FaUsers } from 'react-icons/fa';

import { useState, useEffect } from 'react';

const Hotel_Welcome = () => {
    const [rooms, setRooms] = useState(0);
    const [staffs, setStaffs] = useState(0);
    const [clients, setClients] = useState(0);

    useEffect(() => {
        let roomCount = 0;
        let staffCount = 0;
        let clientCount = 0;

        const interval = setInterval(() => {
            if (roomCount < 1234) {
                roomCount += 2;
                setRooms(roomCount);
            }
            if (staffCount < 1234) {
                staffCount += 2;
                setStaffs(staffCount);
            }
            if (clientCount < 1234) {
                clientCount += 2;
                setClients(clientCount);
            }
            if (roomCount === 1234 && staffCount === 1234 && clientCount === 1234) {
                clearInterval(interval);
            }
        }, 1); 

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Content Section */}
                <div className="col-lg-6 text-center text-lg-start">
                    <h3 className="text-warning" style={{ fontSize: '28px', fontWeight: 'bold' }}>ABOUT US</h3>
                    <h1 className="fw-bold" style={{ fontSize: '48px', fontWeight: '900' }}>Welcome to <span className="text-warning">HOTELIER</span></h1>
                    <p className="text-muted" style={{ fontSize: '20px' }}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.</p>
                    <div className="row text-center mb-4">
                        <div className="col-md-4">
                            <div className="p-4 border rounded">
                                <FaHotel className="text-warning" style={{ fontSize: '50px' }} />
                                <h2 style={{ fontSize: '36px', fontWeight: '700' }}>{rooms}</h2>
                                <p style={{ fontSize: '20px' }}>Rooms</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded">
                                <FaUsersCog className="text-warning" style={{ fontSize: '50px' }} />
                                <h2 style={{ fontSize: '36px', fontWeight: '700' }}>{staffs}</h2>
                                <p style={{ fontSize: '20px' }}>Staffs</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded">
                                <FaUsers className="text-warning" style={{ fontSize: '50px' }} />
                                <h2 style={{ fontSize: '36px', fontWeight: '700' }}>{clients}</h2>
                                <p style={{ fontSize: '20px' }}>Clients</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning text-white px-4 py-3" style={{ fontSize: '20px' }}>EXPLORE MORE</button>
                </div>

                {/* Right Image Gallery Section */}
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-6 p-1">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/481323054.jpg?k=002bc23d038c7d8d13e02cdb2ea05cac41ccf77665c39a88fe6b7e8a2444f3c6&o=&hp=1" alt="Resort" className="img-fluid rounded" id='image' style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-6 p-1">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/481323054.jpg?k=002bc23d038c7d8d13e02cdb2ea05cac41ccf77665c39a88fe6b7e8a2444f3c6&o=&hp=1" alt="Beach Hotel" className="img-fluid rounded" id='image'  style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-6 p-1">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/481323054.jpg?k=002bc23d038c7d8d13e02cdb2ea05cac41ccf77665c39a88fe6b7e8a2444f3c6&o=&hp=1" alt="Luxury Hotel" className="img-fluid rounded"   style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-6 p-1">
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/481323054.jpg?k=002bc23d038c7d8d13e02cdb2ea05cac41ccf77665c39a88fe6b7e8a2444f3c6&o=&hp=1" alt="Pool" className="img-fluid rounded" id='image'  style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel_Welcome;
