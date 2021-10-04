import Course from "../Course/Course";
import './Home.css';

const Home = (props) => {
    const {courses} = props;
    return (
        <div>
            <div className='home-welcome'>
            <h1>Welcome</h1>
            <p>A gym - physical exercises and activities performed inside, often using equipment, especially when done as a subject at school. Gymnasium is a large room with equipment for exercising the body and increasing strength or a club where you can go to exercise and keep fit.</p>
            </div>
            <div className='home-courses'>
                <h2>Latest Courses</h2>
                <div className='w-75 mx-auto all-card'>
                {
                    courses.slice(0, 4).map(course => <Course
                    key={course._id}
                    course={course}
                    ></Course>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;