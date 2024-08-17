import React, { useState } from 'react';

const Cart = () => {
    // Dummy data for example purposes
    const initialCartItems = [
        { 
            id: 1,
            title: "Red Dead Redemption 2", 
            price: 59.99, 
            image: "https://via.placeholder.com/150", 
            quantity: 1 
        },
        { 
            id: 2,
            title: "Hogwarts Legacy", 
            price: 49.99, 
            image: "https://via.placeholder.com/150", 
            quantity: 2 
        },
        { 
            id: 3,
            title: "God of War: Ragnarok", 
            price: 69.99, 
            image: "https://via.placeholder.com/150", 
            quantity: 1 
        },
    ];

    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9fafc',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '900px',
            margin: 'auto',
        }}>
            <h1 style={{ textAlign: 'center' }}>Your Shopping Cart</h1>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {cartItems.map((item) => (
                    <li key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '20px',
                        padding: '10px',
                        backgroundColor: '#ffffff',
                        borderRadius: '10px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}>
                        <img
                            src={item.image}
                            alt={`${item.title} cover`}
                            style={{ borderRadius: '10px', width: '150px', marginRight: '20px' }}
                        />
                        <div style={{ flex: '1' }}>
                            <h2 style={{ margin: '0' }}>{item.title}</h2>
                            <p style={{ margin: '5px 0' }}>Price: ${item.price.toFixed(2)}</p>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <label htmlFor={`quantity-${item.id}`} style={{ marginRight: '10px' }}>Quantity:</label>
                                <input
                                    id={`quantity-${item.id}`}
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    style={{ width: '50px', padding: '5px', textAlign: 'center' }}
                                />
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <button style={{
                                padding: '10px 15px',
                                backgroundColor: '#dc3545',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                            onClick={() => removeItem(item.id)}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <h2>Total: ${calculateTotal()}</h2>
                <button style={{
                    padding: '15px 20px',
                    backgroundColor: '#28a745',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
