import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';




export default function All() {
  const [Allgame, setAllgame] = useState([])
  // const [loading, setLoading] = useState(null)

  async function getAllGames() {
    let { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        headers: {
          'X-RapidAPI-Key': 'af91ac563fmsh4e5021114e8f977p1b04bejsn068b6102ebc5',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        }
      },
    )
    setAllgame(data)
    console.log(data);
  }






  useEffect(() => {
    getAllGames()
   
  }, []);





  return (
    <>
    
      {Allgame.length !== 0 ? <div className="container">
        <div className="row m-3">
          {Allgame.slice(0, 20).map((game, index) =>

            <div key={index} className="col-md-3 g-3">
          <Link key={index} to={`/Details/${game.id}`}>

              <div className="card border-0 " >
                <img className="card-img-top" src={game.thumbnail} alt="Card cap" />
                <div className="card-body d-flex justify-content-between d-flex align-items-cente">
                  <h5 className="card-title">{game.title}</h5>
                  <p className="border-0 text-white p-1 btn bg-primary">Free</p>
                </div>
                <span className="badge  text-dark badge-genre me-2">{game.genre}</span>
              </div>
              </Link>
            </div>
          )}



        </div>
      </div> : <div className="d-flex justify-content-center align-items-centern">
        <p className='fs-1'>LOADING.... <i className='fas fa-spinner fa-2xl text-white fa-spin'></i></p>
      </div>}


    </>
  )
}


