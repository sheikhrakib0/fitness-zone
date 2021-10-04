import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components/Details/Details';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';

function App() {
  const [courses, setCourses] = useState([]);
    useEffect(()=>{
      fetch('./fake.JSON')
      .then(res=>res.json())
      .then(data => setCourses(data))
    }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home courses={courses}></Home>
          </Route>
          <Route exact path='/home'>
            <Home courses={courses}></Home>
          </Route>
          <Route path='/services'>
            <Services courses={courses}></Services>
          </Route>
          <Route path='/service/:id'>
            <Details></Details>
          </Route>
          <Route path='/events'>
            <Events></Events>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
