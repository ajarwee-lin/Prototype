import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <img src={`${process.env.PUBLIC_URL}/U-Tech Logo.png`} alt="U-Tech Logo" className="logo" />
      <h1>Welcome to U-Tech</h1>
      <p>Your one-stop platform for Ride-Hailing, Food Delivery, Product Delivery, and Accommodation Booking.</p>
    </div>
  );
};

export default Home;
