import React from 'react';
import Course from '../Course/Course';
import './Services.css';


const Services = (props) => {
    const {courses} = props;
    return (
        <div className='course-container'>
            <h1 className='pt-4'>Courses Available Now</h1>
           <div className='all-courses'> 
           {
               courses.map(course=> <Course
               key={course._id}
               course = {course}
               ></Course>)
           }
           </div>
        </div>
    );
};

export default Services;