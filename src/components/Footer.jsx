import React from 'react'

function Footer() {
  return (
    <div>
    {/* Footer */}
    <footer className="bg-dark">
      <ul className="nav justify-content-center light" style={{ textDecoration: 'none' }}>
        <li className="nav-item">
          <a className="nav-link" href="#">Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Partners</a>
        </li>
      </ul>
    </footer></div>
  )
}

export default Footer