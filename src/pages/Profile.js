import React from 'react';

const Profile = () => {
    // Dummy data for example purposes
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        avatar: "https://via.placeholder.com/150",
        memberSince: "January 2022",
        totalGames: 45,
        totalPlaytime: 320, // in hours
        favoriteGenre: "RPG",
    };

    const recentGames = [
        { game: "The Witcher 3", hoursPlayed: 120 },
        { game: "Elden Ring", hoursPlayed: 90 },
        { game: "Cyberpunk 2077", hoursPlayed: 70 },
    ];

    const profileStats = [
        { label: "Total Games", value: user.totalGames },
        { label: "Total Playtime", value: `${user.totalPlaytime} hours` },
        { label: "Favorite Genre", value: user.favoriteGenre },
        { label: "Member Since", value: user.memberSince },
    ];

    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f0f4f8',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: 'auto',
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    style={{ borderRadius: '50%', width: '150px', marginRight: '20px' }}
                />
                <div>
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                </div>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Profile Stats</h2>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {profileStats.map((stat, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>
                            <strong>{stat.label}:</strong> {stat.value}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ marginTop: '40px' }}>
                <h2>Recent Games Played</h2>
                <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                    {recentGames.map((game, index) => (
                        <li key={index} style={{ marginBottom: '10px' }}>
                            <strong>{game.game}</strong> - {game.hoursPlayed} hours played
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Profile;
