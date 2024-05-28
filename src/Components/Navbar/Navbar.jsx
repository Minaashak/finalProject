import React from 'react'
import NavStyle from "./Navbar.module.css"
import logo from "./Logo.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (<>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link className="navbar-brand" to="/home"> <img src={`${logo}`}  className={`${NavStyle.img}`} 
    alt="" /> Hand Made</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
    aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>
      </ul>
      <div >
          <button className='btn'>
          <i className="fa-solid fa-right-from-bracket "></i>
          </button>
          <button className={`${NavStyle.button} btn`}>
          <Link className="nav-link" to="/login"><i className="fa-regular fa-user"></i></Link>
          </button>          
          <Link to="/cart" className={`${NavStyle.a}` }>
          <i className={`${NavStyle.i} fa-solid fa-cart-shopping `} />
          </Link>

      </div>
    </div>
  </div>
</nav>

  </>
  )
}
