import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/movies');
      setMovies(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching movies');
      setLoading(false);
      console.error('Error:', err);
    }
  };

  // Function to open the booking modal
  const openBookingModal = (movieTitle) => {
    document.getElementById('movieTitle').value = movieTitle;
  };

  // Function to book ticket
  const bookTicket = async () => {
    const movieTitle = document.getElementById('movieTitle').value;
    const customerName = document.getElementById('name').value;
    const seats = parseInt(document.getElementById('seats').value);

    if (!customerName || !seats) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        movieTitle,
        customerName,
        seats
      });

      // Show success message
      alert(`Booking successful!\nMovie: ${movieTitle}\nName: ${customerName}\nSeats: ${seats}`);
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
      modal.hide();

      // Clear form
      document.getElementById('name').value = '';
      document.getElementById('seats').value = '';
    } catch (error) {
      alert('Error making booking. Please try again.');
      console.error('Booking error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>

      {/* Header/Nav */}

      {/* Banner/Carousel */}
      
      {/* Movie List Section */}
      <div className="container-xl pb-3 pt-3 mt-3 border bg-light" style={{ borderRadius: 8, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center" style={{ paddingBottom: 20 }}>Now on Theatres</h2>
        <div className="row" id="movie-list">
          {movies.map((movie) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={movie.title}>
              <div className="card h-100">
                <img src={movie.image} className="card-img-top img-fluid" alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="rating">{movie.rating}</p>
                  <p className="card-text">{movie.description}</p>
                  <button 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#bookingModal" 
                    onClick={() => openBookingModal(movie.title)}
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Movies Section */}
      <div className="container-xl pb-3 pt-3 mt-3 border bg-light" style={{ borderRadius: 8, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }} align="center">
        <h2 className="text-center pb-5" style={{ paddingBottom: 20 }}>Upcoming Movies</h2>
        <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators" style={{ marginTop: 20, marginBottom: '0%' }}>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
          </div>
          <div className="carousel-inner">
            {/* Carousel Items for Upcoming Movies */}
            <div className="carousel-item active">
              <div className="card" style={{ width: '32rem' }}>
                <img src="assets/fnaf2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Five Nights At Freddy's 2</h5>
                  <p className="card-text bold">December 2025</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card" style={{ width: '32rem' }}>
                <img src="assets/minecraft.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Minecraft The Movie</h5>
                  <p className="card-text bold">March 2025</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card" style={{ width: '32rem' }}>
                <img src="assets/venom3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Venom: The Last Dance</h5>
                  <p className="card-text bold">October 2024</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card" style={{ width: '32rem' }}>
                <img src="assets/rohirrim.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">The Lord of the Rings: The War of the Rohirrim</h5>
                  <p className="card-text bold">October 2024</p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <div className="modal fade" id="bookingModal" tabIndex={-1} aria-labelledby="bookingModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="bookingModalLabel">Book Your Ticket</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="movieTitle" className="form-label">Movie Title</label>
                <input type="text" className="form-control" id="movieTitle" readOnly />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="seats" className="form-label">Number of Seats</label>
                <input type="number" className="form-control" id="seats" required min={1} max={10} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={bookTicket}>Book Ticket</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
}

export default Home;
