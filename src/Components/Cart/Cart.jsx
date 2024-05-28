import React, { useState } from 'react';
import cartImage from "../../Assits/product-2.jpg"
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function Cart() {

  const[count , setCount ] = useState(1);

  // ?---Increase count 

  function inCreaseCount(){
    setCount(count + 1 );
  }

  // ?---decrease Count

  function deCreaseCount(){
    setCount(count - 1 );
  }

  // ?----Remove-Product

  function removeProductMsg(){
    toast.success("Product remove from Cart");
  }
  return (<>
  <section className="cart bg-main-color my-5 py-4 ">
  <div className="container min-height">
    <div className="row">
      <div className="cart-body  d-md-flex align-items-center  border-bottom ">
        <div className="col-md-1">
          <img src={cartImage} className='w-100' alt="" />
        </div>
        <div className="col-md-8 px-3">
          <h3>Title</h3>
          <h6>Some Info</h6>
          <p>Price</p>
        </div>
        <div className="col-md-3 text-center d-flex d-md-block justify-content-between ">
          <div className="count-btn d-flex align-items-center justify-content-center">
            <button onClick={()=> deCreaseCount()} className='btn mx-2'>-</button>
            <span> {count} </span>
            <button  onClick={()=> inCreaseCount()} className='btn mx-2'>+</button>
          </div>
          <button onClick={()=> removeProductMsg()} className='btn btn-outline-danger'>Remove</button>
        </div>
      </div>
      
      <Link to={"/payment"} className='text-decoration-none'>
        <button className=' btn text-white bg-black my-3 d-block ms-auto'>Buy now</button>
      </Link>
    </div>
  </div>
  </section>
  
  </>
  )
}
