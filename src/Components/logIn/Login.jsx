import React from 'react'
import imageLogin from "./../../Assits/Login-Image/page-title-1.webp"
import { Link } from 'react-router-dom';
export default function Login() {
  return (<>
  
  
    <div className="col-12">
      <img src={imageLogin} className='w-100' alt="" />
    </div>

  <section className="container  my-5">
    <div className="row d-flex justify-content-center ">
      <div className="col-md-8 bg-main-color p-4 text-center rounded">
          <h3>Login</h3>
          <p>Please login using account detail bellow.</p>


          <form className='my-3'>

            <div className="form-group my-3">
                <input type="email" className="inputStyle"  placeholder='Email' />
            </div>
            <div className="form-group my-3">
                <input type="password" className="inputStyle"  placeholder='Password' />
            </div>
            <div className="buttons d-flex justify-content-between m-2">
              <button type='submit' className='btn bg-black text-white '>Sign In</button>
              <button type='submit' className='btn border-0'>Forget Password?</button>
              
            </div>
            <div className="create-btn d-flex">
            <Link to={"/signup"}>
              <button type='submit' className='btn border-0'> Create account  </button>
              </Link>
            </div>
          </form>
      </div>
    </div>



  </section>


  
  
  </>
  )
}
