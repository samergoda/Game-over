import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import image from './../img/gaming.ebaf2ffc84f4451d.jpg'

export default function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    password: ''
  })

  //get data from user
  function getUserData(e) {
    let myUser = { ...user }
    myUser[e.target.name] = e.target.value
    setUser(myUser)
    // console.log(user);
  }

  ////// send data//////
  async function sentToApi() {
    let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
    console.log(data);
    if (data.message === "success") {
      navigate('/Login')
    } else {
      setError(data.message)
      setisLoading(false)
    }
  }
  //////////// submit///////////
  function submit(e) {
    e.preventDefault();
    setisLoading(true)
    validation()
    let validationlist = validation();
    if (validationlist.error) {
      setisLoading(false)
      setErrorList(validationlist.error.details)
    } else {
      sentToApi()
    }
  }


  //////// validation////////
  function validation() {
    const schema = Joi.object({
      first_name: Joi.string().min(3).max(8).required(),
      last_name: Joi.string().min(3).max(8).required(),
      age: Joi.number().min(12).max(80).required(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
    return schema.validate(user, { abortEarly: false })
  }

  return (
    <>
      <div className="container">
        <div className="row align-items-center shadow-lg register-section mt-5">
        <div className="col-md-6">
          <img src={image} className='w-100' alt="" />
        </div>
        <div className="col-md-6 ">
          <h2 className='mt-3 text-center'>Create My Account!</h2>
        {errorList.map((err, index) => <div key={index} className='alert alert-danger my-2'>{err.message}</div>)}
        {error.length > 0 ? <div className='alert alert-danger my-2'>{error}</div> : ''}
        <form onSubmit={submit} >
          <div className="form-group">
            <label htmlFor="Frist Name">Frist Name</label>
            <input onChange={getUserData} type="text" className="form-control" id="Frist Name" name="first_name" />
          </div>
          <div className="form-group">
            <label htmlFor="Last Name">Last Name</label>
            <input onChange={getUserData} type="text" className="form-control" id="Last Name" name="last_name" />
          </div>
          <div className="form-group">
            <label htmlFor="Age">Age</label>
            <input onChange={getUserData} type="number" className="form-control" id="Age" name="age" />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input onChange={getUserData} type="email" className="form-control" id="Email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input onChange={getUserData} type="password" className="form-control" id="Password" name="password" />
          </div>
          <div className="d-flex justify-content-center">

          <button className="mt-2 p-2 rounded w-100">
            {isLoading == true ? <i className='fas fa-spinner fa-spin'></i> : 'Submit'}
          </button>
          </div>
          <div className="text-center pt-1">
            <p>Already a member? <Link to="Login">Login</Link> </p>
          </div>
        </form>
        </div>
        </div>
        
      </div>
    </>
  )
}
