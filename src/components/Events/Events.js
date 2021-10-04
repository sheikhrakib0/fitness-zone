import React from 'react';
import './Events.css';
import event from '../../img/upcoming-event-img.jpg';

const Events = () => {
    return (
        <div>
            <h1 className='mt-4'>Our Upcoming Events</h1>
            <img className='mt-4' src={event} alt="" />
            <p>Host training events for upcoming races or competitions; Hold holiday events; Host a creative theme day; Hold a giveaway; Invite local celebrities.Get exclusive updates on the event and special Gold's gym exercises like cardio, bodyweight training routine here.</p>
        </div>
    );
};

export default Events;