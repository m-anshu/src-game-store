import React from 'react';

const Wishlist = () => {
    // Dummy data for example purposes
    const wishlistItems = [
        { 
            title: "Red Dead Redemption 2", 
            price: "$59.99", 
            image: "https://via.placeholder.com/150", 
            addedDate: "August 10, 2024" 
        },
        { 
            title: "Hogwarts Legacy", 
            price: "$49.99", 
            image: "https://via.placeholder.com/150", 
            addedDate: "July 25, 2024" 
        },
        { 
            title: "God of War: Ragnarok", 
            price: "$69.99", 
            image: "https://via.placeholder.com/150", 
            addedDate: "July 15, 2024" 
        },
    ];

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
            <h1 style={{ textAlign: 'center' }}>Your Wishlist</h1>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {wishlistItems.map((item, index) => (
                    <li key={index} style={{
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
                            <p style={{ margin: '5px 0' }}>Price: {item.price}</p>
                            <p style={{ margin: '5px 0' }}>Added: {item.addedDate}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <button style={{
                                padding: '10px 15px',
                                backgroundColor: '#28a745',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                marginBottom: '10px',
                            }}>
                                Move to Cart
                            </button>
                            <br />
                            <button style={{
                                padding: '10px 15px',
                                backgroundColor: '#dc3545',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
