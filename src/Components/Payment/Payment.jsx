import React from 'react'

export default function Payment() {
  return (<>
  
  <div className="container">
    <div className="row d-flex justify-content-center my-5">
      <div className="col-md-8 bg-main-color p-5">
        <h4>Shipping Details:</h4>
        <form className='my-3' >
          <div className="form-group my-3">
            <input type="text" placeholder='Name' className='inputStyle' />
          </div>
          <div className="form-group my-3">
            <input type="tel" placeholder='Phone' className='inputStyle' />
          </div>
          <div className="form-group my-3">
            <input type="text" placeholder='City' className='inputStyle' />
          </div>
          <div className="form-group my-3">
            <input type="text" placeholder='Address' className='inputStyle' />
          </div>
          <button className='btn d-block ms-auto bg-black text-white'>Submet</button>
        </form>
      </div>
    </div>
  </div>
  </>
  )
}
