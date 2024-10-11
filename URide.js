import React, { useState } from 'react';
import axios from 'axios';

const URide = () => {
  const [rideDetails, setRideDetails] = useState({ pickup: '', destination: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/ride', rideDetails); // Replace with actual API
      console.log('Ride Booked:', response.data);
    } catch (error) {
      console.error('Error booking ride:', error);
    }
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
