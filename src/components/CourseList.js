import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('/api/courses'); // Adjust the API endpoint as needed
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    if (loading) {
        return <div>Loading courses...</div>;
    }

    return (
        <div className="course-list">
            {courses.length > 0 ? (
                courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))
            ) : (
                <div>No courses available.</div>
            )}
        </div>
    );
};

export default CourseList;