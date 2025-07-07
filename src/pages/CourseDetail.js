import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
    const { courseId } = useParams();
    
    // Sample course data (this would typically come from an API)
    const courses = [
        {
            id: '1',
            title: 'Introduction to Programming',
            description: 'Learn the basics of programming using Python.',
            syllabus: [
                'Introduction to Python',
                'Data Types and Variables',
                'Control Structures',
                'Functions and Modules',
                'Object-Oriented Programming',
                'Final Project'
            ],
            price: 99.99
        },
        {
            id: '2',
            title: 'Cybersecurity Fundamentals',
            description: 'Understand the principles of cybersecurity and how to protect systems.',
            syllabus: [
                'Introduction to Cybersecurity',
                'Network Security',
                'Application Security',
                'Incident Response',
                'Risk Management',
                'Final Assessment'
            ],
            price: 129.99
        }
    ];

    const course = courses.find(c => c.id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-detail">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <h2>Syllabus</h2>
            <ul>
                {course.syllabus.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Price: ${course.price.toFixed(2)}</h2>
            <button>Add to Cart</button>
        </div>
    );
};

export default CourseDetail;