import React from 'react';

const CourseCard = ({ title, description, price, onAddToCart }) => {
    return (
        <div className="course-card">
            <h2 className="course-title">{title}</h2>
            <p className="course-description">{description}</p>
            <p className="course-price">${price}</p>
            <button className="add-to-cart-button" onClick={onAddToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default CourseCard;