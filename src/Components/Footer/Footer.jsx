import React from 'react'
import footerStyle from './footer.module.css'

export default function Footer() {
  return (<>
  <footer className={`${footerStyle.footer}`}>
    <div className="container ">
      <div className="row p-3 ">
        <div className="col-md-6 ">
          <div className="title " >
            <h3>Hand Made</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod itaque recusandae commodi mollitia facere iure nisi, laudantium quis quas perferendis a minus dolores.</p>
          </div>
        </div>
        <div className="col-md-2">
        <div className="title " >
            <p className='cursor'>About Us</p>
            <p className='cursor'>Store location</p>
            <p className='cursor'>Contact</p>
            <p className='cursor'>Orders</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className="title " >
            <p className='cursor'>Returns</p>
            <p className='cursor'>Support Policy</p>
            <p className='cursor'>Size Guide</p>
            <p className='cursor'>FAQs</p>
          </div>
        </div>
        <div className="col-md-2">
        <div className="title " >
            <p  className='cursor'><i class="fa-brands fa-twitter mx-2"></i>Twitwer</p>
            <p  className='cursor'><i className="fa-brands fa-facebook mx-2"></i>FaceBook</p>
            <p  className='cursor'><i className="fa-brands fa-instagram mx-2"></i>Instagram</p>
            <p  className='cursor'><i className="fa-brands fa-youtube mx-2"></i>YouTube</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  </>
  )
}
