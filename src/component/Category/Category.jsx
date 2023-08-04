import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Media from '../Media/Media'

export default function Category() {
  const [Categorygame, setCategorygame] = useState([])
  // const [loading, setLoading] = useState(null)
  let parm = useParams()

  async function getCategoryGames(typ) {
    let { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        params: { category: `${typ}` },
        headers: {
          'X-RapidAPI-Key': 'af91ac563fmsh4e5021114e8f977p1b04bejsn068b6102ebc5',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        }
      },
    )
    setCategorygame(data)
    console.log(data);
  }

  useEffect(() => {
    getCategoryGames(parm.type)
  }, []);



  return <>
    {Categorygame.length !== 0 ? <div className="container">
        <div className="row m-3">
          {Categorygame.slice(0, 20).map((game, index) =>

            <div key={index} className="col-md-3 g-3">
          <Link key={index} to={`/Details/${game.id}`}>

              <div className="card border-0 " >
                <img className="card-img-top" src={game.thumbnail} alt="Card image cap" />
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
}
