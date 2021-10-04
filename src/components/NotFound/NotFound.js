import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <p>Not found</p>
            <Button href='/home'>Back to Home</Button>
        </div>
    );
};

export default NotFound;