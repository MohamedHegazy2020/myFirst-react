import React from 'react'
import "./portfolio.css"
import img1 from "./imgs/cabin.jpg";
import img2 from "./imgs/cake.png"
import img3 from "./imgs/circus.jpg"
import img4 from "./imgs/game.jpg"
import img5 from "./imgs/safe.jpg"
import img6 from "./imgs/submarine.jpg"
export default function Portfolio() {
 


    return <>
    
    <div className="container my-4 py-5">
        <div className="inner text-center mt-5 pt-5">
            <h1>PORTFOLIO</h1>
        </div>
        <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>

    <div className="row g-5 p-5">
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal"> 
            <div className="inner-row position-relative">
                <img src={img1} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal2"> 
            <div className="inner-row position-relative">
                <img src={img2} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal3"> 
            <div className="inner-row position-relative">
                <img src={img3} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal4"> 
            <div className="inner-row position-relative">
                <img src={img4} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal5"> 
            <div className="inner-row position-relative">
                <img src={img5} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
        <div className="col-md-4 "  data-bs-toggle="modal" data-bs-target="#exampleModal6"> 
            <div className="inner-row position-relative">
                <img src={img6} alt="" className='w-100 rounded-3' />
                <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">
                <i className="fa-solid fa-plus text-white fa-3x"></i>
                </div>
            </div>
        </div>
    </div>



<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        <i className="fa-solid fa-x fs-2 pe-5"></i>
        </button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel">LOG CABIN</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img1} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">        <i className="fa-solid fa-x fs-2 pe-5"></i>
</button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel2">TASTY CAKE</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img2} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">        <i className="fa-solid fa-x fs-2 pe-5"></i>
</button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel3">CIRCUS TENT</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img3} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">        <i className="fa-solid fa-x fs-2 pe-5"></i>
</button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel4">CONTROLLER</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img4} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">        <i className="fa-solid fa-x fs-2 pe-5"></i>
</button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel5">LOCKED SAFE</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img5} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel6" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content">
      <div className="modal-header">
      
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">        <i className="fa-solid fa-x fs-2 pe-5"></i>
</button>
      </div>
      <div className='inner-mod text-center'>  <h1 className="modal-title fs-1" id="exampleModalLabel6">SUBMARINE</h1>
      
      <div className="lines d-flex align-items-center justify-content-center">
  <div className="in-line bg-black">

  </div>
  <div className="star">
  <i className="fa-solid fa-star mx-3  fs-2"></i>
  </div>
  <div className="in-line bg-black">

</div>
</div>
      
      
      </div>
      <div className="modal-body text-center w-75 m-auto">
            <img src={img6} alt="" className='w-100 rounded-3'/>
            <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
      </div>
      <div className="modal-footer justify-content-center">
     
        <button type="button" className="btn  exit-btn text-white" data-bs-dismiss="modal">  <i className="fa-solid fa-x me-3"></i>Close Window</button>
      </div>
    </div>
  </div>
</div>
    </div>
    
    </>
}
