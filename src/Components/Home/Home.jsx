import React from 'react'
import style from "./Home.module.css";
import HomeImage from "../../Assits/Home.jpg";
import productImage from "../../Assits/Product.webp";
import imgInfo1 from "../../Assits/info-1.webp"
import imgInfo2 from "../../Assits/info-2.webp"
import imgInfo3 from "../../Assits/info-3.webp"
import imgInfo4 from "../../Assits/info-4.webp"


export default function Home() {
  return (<>
  
  <section className={`${style.home} `} >
    <div className="col-12">
      <img src={HomeImage} className={` ${style.HomeImage}  w-100`} alt="" />
    </div>

    <div className={` ${style.HomeBg} my-5 py-4 `}>
      <div className="container py-4  ">
      <div className="row g-4">
          
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="HomeCart p-3 bg-white rounded ">
              <div className="img">
                <img src={productImage} className='w-100  rounded' alt="" />
              </div>
              <div className="cart-info text-center py-3">
                <h5>Preorder Product</h5>
                <p className=' money-color'>120 EGP</p>
                <button className='w-100 btn bg-black text-white'> <i className='fa-solid fa-cart-shopping mx-2'></i>  Add to Cart</button>
              </div>
            </div>
          </div>
          

          
          

          
          

        </div>
      </div>
        
    </div>

  <div className="about-site bg-main-color my-4">
  <div className="container py-5 ">
      <div className="site-info">
      <div className="row ">

            <div className="col-md-6 align-self-center">
              <div className="info p-4 text-center ">
                <h3>Making & crafting</h3>
                <h4 className='text-danger'>Handicraft shop</h4>
                <p>Crafting beautiful stuff with our own hands and the help from useful tools is a wonderful process, where you can enjoy yourself while pulling out some ideas and busy perfecting your work.</p>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="img-info p-4 text-center">
                <img src={imgInfo1} className='w-75' alt="" />
                <h3 className='my-3'>Gift Idea</h3>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="img-info p-4 text-center">
                <img src={imgInfo2} className='w-75' alt="" />
                <h3 className='my-3'>Home Decor</h3>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="img-info p-4 text-center">
                <img src={imgInfo3} className='w-75' alt="" />
                <h3 className='my-3'>Kniting & Sewing</h3>
              </div>
            </div>

            <div className="col-md-6 ">
              <div className="img-info p-4 text-center">
                <img src={imgInfo4} className='w-75' alt="" />
                <h3 className='my-3'>Gift Idea</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
    

  </section>
  
  
  </>
  )
}
