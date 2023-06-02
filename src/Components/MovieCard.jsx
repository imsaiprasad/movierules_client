import React from 'react'

const MovieCard = ({props}) => {
console.log("props",props)
  return (
    <div style={{marginTop:"20px"}}>
        <img src={props.image} height={250} width={200} style={{border:"2px solid rgb(115, 111, 111)"}}/>
        <div style={{textAlign:"left",padding:"10px"}}>
            <p>Movie: {props.title} </p>
            <p>Genres: {props.genre}</p>
            <p>Language: {props.language}</p>
            <p>{props.introduction}</p>

        </div>
    </div>
  )
}

export default MovieCard