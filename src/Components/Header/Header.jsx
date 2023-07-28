import React from 'react'
import img1 from "../Navbar/avataaars.svg"

export default function Header() {
    return<>
    
    
    
    <header className='text-white py-5 mt-5' >
  
  <div className="inner-header d-flex justify-content-center align-items-center flex-column mt-5 ">
  <img src={img1} alt=""  />
      <h1 className='py-4'>START REACT
  </h1>
  </div>
  <div className="lines d-flex align-items-center justify-content-center">
    <div className="in-line">
  
    </div>
    <div className="star">
    <i className="fa-solid fa-star mx-3 text-white fs-2"></i>
    </div>
    <div className="in-line">
  
  </div>
  </div>
  
  <div className="subtext text-center">
    <p>Graphic Artist - Web Designer - Illustrator
  </p>
  
  </div>
    </header>
    </>
}
