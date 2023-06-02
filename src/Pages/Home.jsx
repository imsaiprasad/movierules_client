import React from 'react'
import MoviesGallery from '../Components/MoviesGallery'
import AdsPage from '../Components/AdsPage'
import NavBar from '../Components/NavBar'
import { useState } from 'react'

const Home = () => {

const [whichMovie,setWhichMovie]=useState("Home")

function MovieSetter(props)
{
  setWhichMovie(props)
}

  return (
    <div className="Container" style={{width:"1200px",marginLeft:"auto",marginRight:"auto"}}>

        <div className='Header' style={{width:"100%"}}>
          <NavBar MovieSetter={MovieSetter} />
        </div>

        <div className='MidParent' style={{marginTop:"10px",minHeight:'80vh',display:"flex"}}>


           <div className='midLeft'>
              <MoviesGallery whichMovie={whichMovie}  />
           </div>




           <div className='midRight' >
              <AdsPage />
            </div>

        </div>

    </div>
  )
}

export default Home