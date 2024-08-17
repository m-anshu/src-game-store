import React from 'react';

const About = () => {
    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f9fafc',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '900px',
            margin: 'auto',
            lineHeight: '1.6',
        }}>
            <h1 style={{ textAlign: 'center' }}>About Us</h1>
            
            <section style={{ marginBottom: '40px' }}>
                <h2>Our Mission</h2>
                <p>
                    At Azure Games, our mission is to provide an unparalleled experience for gamers around the world. 
                    We strive to bring the best titles to players of all kinds, offering a wide range of games that suit different interests, from action-packed adventures to immersive RPGs. 
                    We believe in the power of gaming to unite people and foster creativity, innovation, and community.
                </p>
            </section>

            <section style={{ marginBottom: '40px' }}>
                <h2>Our Story</h2>
                <p>
                    Azure Games was founded in 2023 by a group of passionate gamers who wanted to make a difference in the gaming community. 
                    We started as a small local shop and have since grown into a global online platform. Over the years, we have partnered with major game developers and indie studios alike to bring the latest and greatest games to our customers. 
                    Our commitment to quality, customer satisfaction, and a strong gaming community has been the cornerstone of our growth and success.
                </p>
            </section>

            <section>
                <h2>Meet the Team</h2>
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Team member"
                            style={{ borderRadius: '50%', marginBottom: '10px' }}
                        />
                        <h3>Anshu J</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Team member"
                            style={{ borderRadius: '50%', marginBottom: '10px' }}
                        />
                        <h3>John Doe</h3>
                        <p>Head of Development</p>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Team member"
                            style={{ borderRadius: '50%', marginBottom: '10px' }}
                        />
                        <h3>Jane Doe</h3>
                        <p>Marketing Director</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
