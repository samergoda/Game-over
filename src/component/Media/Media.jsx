import React from 'react'
import { Link } from 'react-router-dom'

export default function Media({ item }) {
  return  <>
        <div className="col-md-3 g-3 ">

            <div className="card border-0 " >
              <img className="card-img-top" src={item.thumbnail} alt="Card image cap" />
              <div className="card-body d-flex justify-content-between  align-items-cente">
                <h5 className="card-title">{item.title}</h5>
                <p className="border-0 text-white p-1 btn bg-primary">Free</p>
              </div>
              <span className="badge  text-dark badge-genre me-2">{item.genre}</span>
            </div> 
            </div>
    </>
  
}
 