import React from 'react'
import Nav2 from './Nav2'
import { useLocation } from 'react-router-dom'
import MovieCard from './MovieCard'

const Movie = () => {

    const location = useLocation()

    console.log("location",location)
  
  return (
    <div className="Container" style={{width:"1200px",marginLeft:"auto",marginRight:"auto"}}>

    <div className='Header' style={{width:"100%"}}>
        <Nav2/>
    </div>

    <div className='MidParent' style={{marginTop:"10px",minHeight:'80vh',display:"flex"}}>
       <div className='midLeft2'>
         <MovieCard  props={location.state.props}/>
       </div>

       <div className='midRight2' >
         
       </div>

    </div>

</div>
  )
}

export default Movie