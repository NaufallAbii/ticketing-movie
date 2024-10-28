const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Movie = require('./models/Movie'); // Mengimpor model Movie
const Booking = require('./models/Booking'); // Mengimpor model Booking

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/movie-booking')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

// API Routes
// Get all movies
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new booking
app.post('/api/bookings', async (req, res) => {
  const booking = new Booking({
    movieTitle: req.body.movieTitle,
    customerName: req.body.customerName,
    seats: req.body.seats
  });

  try {
    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
