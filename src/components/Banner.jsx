import React from 'react'


function Banner() {
  return (
    <div>
    {/* Caraousel/Banner */}
    <div id="carouselExampleControls" className="carousel slide pt-0 md-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="img-wrapper">
            <img src="assets/jajan.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-wrapper">
            <img src="assets/cocacola.jpg" className="d-block w-100" alt="coke" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="img-wrapper">
            <img src="assets/gopay.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  )
}

export default Banner