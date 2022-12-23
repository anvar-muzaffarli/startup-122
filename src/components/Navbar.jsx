import React from 'react'
// JAVASCRIPTDE OBYEKTIN PARCALANMASI MOVZUSU {}
import {HiOutlineBars3CenterLeft} from "react-icons/hi2"

import brendim from '../assets/svgs/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={brendim} alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span>
        <HiOutlineBars3CenterLeft />
       </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Demos</a>
          </li>

          <li className='nav-item'>
            <button className="buy-now-btn">Buy now</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar