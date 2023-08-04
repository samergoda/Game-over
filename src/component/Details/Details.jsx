import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';


export default function Details() {
  const [Detailsgame, setDetailsgame] = useState([])

  let pram = useParams()
  // console.log(parm);

  async function getDetailsGames(id) {
    let { data } = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,
      {
        params: { id: `${id}` },
        headers: {
          'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      },
    )
    setDetailsgame(data)
    console.log(data);
  }


  useEffect(() => {
    getDetailsGames(pram.id)
  }, []);

  return (
    <>
      {Detailsgame.length !== 0 ? <div className="container">


        <div className="row">
          <div className="col-md-3">
            <img src={Detailsgame.thumbnail} className='w-100' alt="" />
          </div>
          <div className="col-md-9">
            <h4>{Detailsgame.title}</h4>
            <p>{Detailsgame.description}</p>

            <h5>Minimum System Requirements</h5>
            <div className="">
              <p>{Detailsgame.minimum_system_requirements.os}</p>
              <p>{Detailsgame.minimum_system_requirements.processor}</p>
              <p>{Detailsgame.minimum_system_requirements.memory}</p>
              <p>{Detailsgame.minimum_system_requirements.graphics}</p>
              <p>{Detailsgame.minimum_system_requirements.storage}</p>

            </div>
            const slider = (
              <AwesomeSlider animation="cubeAnimation">
                {Detailsgame.screenshots.map((img, index) =>
                  <div key={index} id='slider' data-src={img.image} />,
                  
                )}

              </AwesomeSlider>
            
            );

          </div>
        </div>







      </div> : <div className="d-flex justify-content-center align-items-center">
        <p className='fs-1'>LOADING.... <i className='fas fa-spinner fa-2xl text-white fa-spin'></i></p>
      </div>}

    </>
  )
}



