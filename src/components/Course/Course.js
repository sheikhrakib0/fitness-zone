import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const {_id ,name, picture, description, price, rating} = props.course;

    return (
        <div className='p-2 sigle-card'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='card-title'>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0,100)}...
                    </Card.Text>
                    <div className='d-flex justify-content-center'>
                    <p>Price: ${price}</p> <p className='ms-2'>rating: {rating}</p>
                    </div>
                    <Button>
                    <Link className='text-white buttons' to={`/service/${_id}`}>Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;