import React from 'react'
import imageSignIn from "../../Assits/Login-Image/page-title-1.webp"
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup"

export default function Signup() {


  function register(value){
    console.log(value);
  }

let validationSchema = Yup.object({
  name: Yup.string().max(20, "max Length is 20").required("name is Required") ,
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/, "this is not a egyption number").required("Phone is required")  ,
  password: Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/ , "Password Should be start with capital Letter and small letters and number and max length is 8 and min length is 5").required("password is required") ,
  rePassword:Yup.string().oneOf([Yup.ref("password")], "Password and rePassowrd not matchs" ) ,
  email: Yup.string().email("Email not valid").required("Email is required"),
})

  let formik = useFormik({
    initialValues:{
      name:"",
      phone:"",
      password:"",
      rePassword:"",
      email:"",
    },
    validationSchema:validationSchema,
    onSubmit:(value)=>register(value)
  })
  return (<>
  
  <div className="col-12">
    <img src={imageSignIn} className='w-100 ' alt="" />
  </div>
  


    <div className="container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 p-4 bg-main-color text-center rounded">
        <h3 className='my-3'>Create Account</h3>
        <p>Please Register using account detail bellow.</p>
          <form onSubmit={formik.handleSubmit} >
            <div className="form-group my-3">

              {/* Name input */}
              <input type="text" placeholder='Name' name='name'  value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='inputStyle' />
              {formik.errors.name  && formik.touched.name ? <div className='alert alert-danger'> {formik.errors.name} </div> : ""}
            </div>
            <div className="form-group my-3">

              {/* Email input */}
              <input type="email" placeholder='Email' className='inputStyle' onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' value={formik.values.email} />
              {formik.errors.email  && formik.touched.email ? <div className='alert alert-danger'> {formik.errors.email} </div> : ""}
            </div>
            <div className="form-group my-3">
              <input type="password" placeholder='Password' className='inputStyle' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.errors.password  && formik.touched.password ? <div className='alert alert-danger'> {formik.errors.password} </div> : ""}
            </div>
            <div className="form-group my-3">
              <input type="password" placeholder='Repassword' className='inputStyle' name='rePassword' onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} />
              {formik.errors.rePassword  && formik.touched.rePassword ? <div className='alert alert-danger'> {formik.errors.rePassword} </div> : ""}
            </div>
            <div className="form-group my-3">
              <input type="tel" placeholder='Phone' className='inputStyle' name='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange}  />
              {formik.errors.phone  && formik.touched.phone ? <div className='alert alert-danger'> {formik.errors.phone} </div> : ""}
            </div>
            <div className="button d-flex my-2">
              <Link to={"/login"}>
                <button type='submit' className='btn bg-black text-white' >Create</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  </>
  )
}
