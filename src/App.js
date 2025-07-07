import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './styles/main.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/courses/:id" component={CourseDetail} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;