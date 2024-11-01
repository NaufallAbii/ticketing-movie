const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  movieTitle: { type: String, required: true },
  customerName: { type: String, required: true },
  seats: { type: Number, required: true, min: 1, max: 10 },
  bookingDate: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
