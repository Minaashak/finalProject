import React from 'react';
import imageProd from "../../Assits/product-2.jpg";
import { toast } from 'react-hot-toast';

export default function Shop() {


  function addToCartMsg(){
    toast.success("Product Add to Cart succssefuly");
  }
  return (<>
  
  <div className="container my-5">
    <div className="row">


      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="product p-4 rounded">
          <div className="img">
            <img src={imageProd} className='w-100' alt="" />
          </div>
          <div className="prod-info py-3">
            <h3>Title</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum ratione et fugiat.</p>
            <div className="info d-flex justify-content-between">
            <h5 className='money-color'>135 EGP</h5>
              <p> <i className="fa-solid fa-star star-Product"></i> 4.5</p>
            </div>
            <button onClick={()=>addToCartMsg()} className='btn text-white bg-black w-100 '> Add to Cart</button>
          </div>
        </div>
      </div>
      

    </div>
  </div>
  
  </>
  )
}
