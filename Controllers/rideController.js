// controllers/rideController.js
const Ride = require('../models/Ride');

const bookRide = async (req, res) => {
  const { pickupLocation, destination } = req.body;

  try {
    const newRide = new Ride({
      user: req.userId,  // userId from auth middleware
      pickupLocation,
      destination,
    });

    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    res.status(500).json({ message: 'Error booking ride' });
  }
};

module.exports = { bookRide };
