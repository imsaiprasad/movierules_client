import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Card from './Card'
import {useNavigate} from "react-router-dom"

const MoviesGallery = ({whichMovie}) => {

  const navigate = useNavigate();
  const [movies,setMovies]=useState([])


  useEffect(()=>{

    if(whichMovie==="Home"||whichMovie==="Others")
    {
      // https://movierules-server.onrender.com/
    axios.get("https://movierules-server.onrender.com/getRecentMovies",{
      method:"GET",
    })
    .then((res)=>{
      
      setMovies(res.data.data)
    })
    .catch((e)=>{
      console.log("error : ",e)
    })

     }
     else if(whichMovie==="Tollywood"||whichMovie==="Bollywood"||whichMovie==="Tamil"||whichMovie==="Malyalam"||whichMovie==="Hollywood")
     {

      const body={
        whichMovie:whichMovie
      }

       axios.post("https://movierules-server.onrender.com/getParticularHeader",body,  {
       method:"POST",
        headers: {
       'Content-Type': 'application/json'
        }
        })
        .then((res)=>{
          
          setMovies(res.data.data)
        })
        .catch((e)=>{
          console.log("error : ",e)
        })
        

     }
     else{

      const body={
        whichMovie:whichMovie
      }

       axios.post("https://movierules-server.onrender.com/searchMovie",body,  {
       method:"POST",
        headers: {
       'Content-Type': 'application/json'
        }
        })
        .then((res)=>{
         
          setMovies(res.data.data)
        })
        .catch((e)=>{
          console.log("error : ",e)
        })

     }

  },[whichMovie])



  function NavigatorX(prop)
  {
  
    navigate("/movieX",{state:{props:prop}})
  }

  return (
    <div style={{display:"grid",
    gridTemplateColumns: "auto auto auto auto",margin:"10px"}}>

{
  movies.map((prop,index)=>{
    return (
      <div onClick={()=>{NavigatorX(prop)}} key={index}> 
      <Card props={prop} />
      </div>
    )
  })
}

    </div>
  )
}

export default MoviesGallery