import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
    return (
        <div className="home">
            <header className="home-header">
                <h1>Welcome to Our Course Platform</h1>
                <p>Explore our wide range of programming and cybersecurity courses designed to enhance your skills and career.</p>
            </header>
            <section className="featured-courses">
                <h2>Featured Courses</h2>
                <CourseList />
            </section>
        </div>
    );
};

export default Home;