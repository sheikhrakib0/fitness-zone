import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container pt-2'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-white'>FITNESS ZONE</h1>
                    <p className='text-white'>We are here with our best service at a best price. We have best trainer here.</p>
                    <br />
                    <br />
                    <p><small>copyright, all right reserved by author. 2021</small></p>
                </div>
                <div className='col-md-6'>
                    <h1>CONTACT US</h1>
                    <h3>Get udated news</h3>
                    <input type="text" placeholder='your email' /> <button>Subscribe</button>
                    <br /> <br />
                    <p>Phone: +880179229900*</p>
                    <p>Address: Muktijoddha Abdul Mannan Hall, MBSTU, Tangail, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;