import React from 'react'
import "./contact.css"
export default function Contact() {
 return <>
    <div className="contact my-5 py-5">
        <div className="container ">
            <div className="inner text-center mt-5 pt-5">
                <h1>CONTACT ME</h1>
            </div>
            <div className="lines d-flex align-items-center justify-content-center">
    <div className="in-line bg-dark">
  
    </div>
    <div className="star">
    <i className="fa-solid fa-star mx-3  fs-2"></i>
    </div>
    <div className="in-line bg-dark ">
  
  </div>
  </div>

  <form action="">
    <div className="inner-form d-flex flex-column align-items-center">
    <input type="text"  placeholder='Name' className=' border-bottom py-4'/>
<input type="email"  placeholder='Email Adress' className=' border-bottom py-4'/>
<input type="text"  placeholder='Phone Number' className=' border-bottom py-4'/>
<input type="text"  placeholder='Message' className=' border-bottom py-5'/>
<button className='btn form-btn text-white py-3 px-4 mt-4'>Send</button>
    </div>
  </form>
        </div>
    </div>
 
 
 
 </>
}
