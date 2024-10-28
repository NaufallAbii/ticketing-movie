// scripts/seedMovies.js
const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movies = require('../data/movies.json');

mongoose.connect('mongodb://localhost:27017/movie-booking')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('Failed to connect to MongoDB', err));

const seedMovies = async () => {
  try {
    // await Movie.deleteMany({}); // Clear existing movies
    await Movie.insertMany(movies);
    console.log('Movies seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding movies:', error);
    process.exit(1);
  }
};

seedMovies();