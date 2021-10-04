import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

const Details = (props) => {
    const {id} = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        const url =`./fake.JSON${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])

    const {img, name, description, instructor, price, rating, enrolled, duration} = service;
    return (
        <div className='d-block w-75'>
            <h1>number id {id}</h1>
            <div>
                <img height='400px' width='600px' src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>Instructor: {instructor}</h4>
                <div className='d-flex'>
                <p>price: {price}</p> <p className='ms-2'>rating: {rating}</p>
                </div>
                <div className='d-flex'>
                <p>Enrolled: {enrolled}</p> <p className='ms-2'>Duration: {duration}</p>
                </div>
                <Button>Enroll Now</Button>
            </div>
            
        </div>
    );
};

export default Details;