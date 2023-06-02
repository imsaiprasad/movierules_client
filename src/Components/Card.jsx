import React from 'react'

const Card = ({props}) => {
   
  return (
    <div className='col-lg-3' style={{width:"180px",margin:"15px 10px",backgroundColor:"black"}}>
        <img src={props.image} height={200} width={180} alt={props.title}/>
        <p>{props.title} ({props.year}) {props.language} full movie watch</p>
    </div>
  )
}

export default Card