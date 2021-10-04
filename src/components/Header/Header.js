import React from 'react';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="Header-container">
        <div className="header align-items-center">
          <Navbar></Navbar>
          <div>
            <h1 className="title">
              IMPOSSIBLE IS JUST AN<br /> <span className='opinion'>OPINION</span>
            </h1>
            <p className="text-white text-center mt-2">
              Keep your body healthier and fit with our premium course. Make yourself perfect.
            </p>
            <Button href='/services' className='mt-3 join-btn'>Go to courses</Button>
            <Button className='mt-3 join-btn ms-4'>Join us</Button>
          </div>
        </div>
    </div>
    );
};

export default Header;