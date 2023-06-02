import React from 'react'
import { useRef } from 'react'


const NavBar = ({MovieSetter}) => {

  //Have to handle search seperately
  const refer=useRef()

  function Handler(e)
  {
    if(refer.current.value.trim().length>0)
    {
      MovieSetter(refer.current.value)
      
    }
    
  }


  return (
    <div>

    <div className='NavHeader' >

       <div className='Title'>
        <div style={{display:"flex",justifyContent:"flex-start"}}>
         <h1>Movierules</h1>
         </div>
         <p>Watch & Download Telugu Hindi Tamil Malayalam Movies Online Free</p>
       </div>

       <div className='searchBar'> 
       
          <div style={{display:"flex",alignItems:"center"}}>
         <input type="text" placeholder='Search...' style={{marginRight:"5px"}} ref={refer}/>
         <button type="button" class="btn btn-outline-info" onClick={Handler}>Search</button>
          </div>
        </div>

    </div>

    <div className='NavBottom'>
      <nav class="nav">
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Home")}}>Home</a>
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Tollywood")}}>Tollywood</a>
  <a class="nav-link" href="#"onClick={
    ()=>{ MovieSetter("Bollywood")}}>Bollywood</a>
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Tamil")}}>Tamil</a>
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Malyalam")}}>Malyalam</a>
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Hollywood")}}>Hollywood</a>
  <a class="nav-link" href="#" onClick={
    ()=>{ MovieSetter("Others")}}>Others</a>
       </nav>
    </div>

    </div>



  )
}

export default NavBar