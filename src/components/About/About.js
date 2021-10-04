import React from 'react';
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1>We are always here open for you.</h1>
            <div className='p-5'>
                    <h1>CONTACT US</h1>
                    <h3>Get udated news</h3>
                    <input type="text" placeholder='your email' /> 
                    <Button className='ms-4'>Subscibe</Button>
                    <br /> <br />
                    <p>Phone: +880179229900*</p>
                    <p>Address: Muktijoddha Abdul Mannan Hall, MBSTU, Tangail, Bangladesh</p>
                </div>
        </div>
    );
};

export default About;