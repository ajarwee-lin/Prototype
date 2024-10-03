import React, { useState } from 'react';

const URide = () => {
  const [rideDetails, setRideDetails] = useState({ pickup: '', destination: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Ride Details:', rideDetails);
    // Submit the ride details to the backend
  };

  return (
    <div>
      <h1>Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pickup"
          value={rideDetails.pickup}
          onChange={handleChange}
          placeholder="Pickup Location"
          required
        />
        <input
          type="text"
          name="destination"
          value={rideDetails.destination}
          onChange={handleChange}
          placeholder="Destination"
          required
        />
        <button type="submit">Book Ride</button>
      </form>
    </div>
  );
};

export default URide;
