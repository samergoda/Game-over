import React, { useEffect ,useState } from 'react'
import './Home.css'
import axios from "axios";
import { Link } from 'react-router-dom';


export default function Home() {
  const [Homegame, setHomegame] = useState([])
  // const [loading, setLoading] = useState(null)

  async function getHomeGames() {
    let { data } = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',
      {
        headers: {
          'X-RapidAPI-Key': 'af91ac563fmsh4e5021114e8f977p1b04bejsn068b6102ebc5',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        }
      },
    )
    setHomegame(data)
    console.log(data);
  }






  useEffect(() => {
    getHomeGames()
   
  }, []);






  return (
    <>
      <section>
        <div className="bg-img p-5">
          <div className=" d-flex align-items-center text-center flex-column ">
            <h1>Find & track the best <span className='text-info'>free-to-play</span>  games!</h1>
            <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
            
              <Link className='btn btn-outline-secondary btn-md ml-0' to='/All'>Browser Game </Link>
            
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row d-flex m-3">
            <h2 className='m-3'>Personalized Recommendations</h2>
            {Homegame.slice(66, 69).map((game, index) =>
            <div className="col-md-4">
          <Link key={index} to={`/Details/${game.id}`}>
              
              <div className="card border-0" >
                <img className="card-img-top" src={game.thumbnail} alt='g'/>
                  <div className="card-body d-flex justify-content-between d-flex align-items-cente">
                    <h5 className="card-title text-white text-decoration-none">{game.title}</h5>
                    <p  className="border text-white btn border-0 bg-primary">Free</p>
                  </div>
                <span className="badge  text-dark badge-genre me-2">{game.genre}</span>

              </div>
               </Link>
            </div>
)}
             
            

            
            
          </div>
        </div>
      </section>
    </>
  )
}
