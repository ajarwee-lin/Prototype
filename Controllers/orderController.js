// controllers/orderController.js
const Order = require('../models/Order');

const placeOrder = async (req, res) => {
  const { items } = req.body;

  try {
    const newOrder = new Order({
      user: req.userId,
      items,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error placing order' });
  }
};

module.exports = { placeOrder };
