import React from 'react';
import CourseList from '../components/CourseList';

const Courses = () => {
    return (
        <div className="courses-page">
            <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
            <p className="text-xl text-gray-600 mb-8">Explore our programming and cybersecurity courses designed to enhance your skills and knowledge.</p>
            <CourseList />
        </div>
    );
};

export default Courses;