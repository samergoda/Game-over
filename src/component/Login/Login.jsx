import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi';
import image from './../img/gaming.ebaf2ffc84f4451d.jpg'

export default function Login({saveUserData}) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [error, setError] = useState('')
  const [user, setUser] = useState({

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
  // https://route-egypt-api.herokuapp.com/signin
  // https://routeegypt.herokuapp.com/signin
  ////// send data//////
  async function sentToApi() {
    let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
    console.log(data);
    if (data.message === "success") {
      localStorage.setItem('userToken', data.token);
      saveUserData()
      navigate('/Home')
      setisLoading(false)
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
            <label htmlFor="Email">Email</label>
            <input onChange={getUserData} type="email" className="form-control" id="Email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input onChange={getUserData} type="password" className="form-control" id="Password" name="password" />
          </div>
          <div className="d-flex justify-content-center">

          <button className="mt-2 p-2 rounded w-100">
            {isLoading === true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
          </button>
          </div>
          <div className="text-center pt-1">
            <p>Not a member yet?  <Link to="registr">Create Account</Link> </p>
          </div>
        </form>
        </div>
        </div>
        
      </div>
    </>
  )
}

