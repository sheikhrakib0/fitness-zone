import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='contianer mt-0 pt-0'>
            <div className='row'>
                <div className='col-md-2'>
                    <h1 className='bar-heading'>FITNESS ZONE</h1>
                </div>
                <div className='col-md-10'>
                    <div className='items'>
                        <ul className='d-flex align-items-end justify-content-end'>
                            <Link to='/home' className='item'>
                                <li>Home</li>
                            </Link>
                            <Link to='/services' className='item'>
                                <li>Services</li>
                            </Link>
                            <Link to='/events' className='item'>
                                <li>Events</li>
                            </Link>
                            <Link to='/about' className='item'>
                                <li>About Us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;