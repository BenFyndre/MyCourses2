import React from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = React.useState([]);

    const removeFromCart = (index) => {
        const newCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(newCartItems);
    };

    const updateQuantity = (index, quantity) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity = quantity;
        setCartItems(newCartItems);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(index, e.target.value)}
                                min="1"
                            />
                            <button onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <h2>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default Cart;