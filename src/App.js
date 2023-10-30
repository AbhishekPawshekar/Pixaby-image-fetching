import './App.css';
import React, { useEffect, useState } from 'react'
function App () {
          const[data,setdata]=useState([]);
          const[search,setsearch]=useState("");
          
          useEffect(()=>{
                    fetch(`https://pixabay.com/api/?key=40363710-adb7f100bb05e58b699049dc7&q=${search}&image_type=photo`)
                    .then(result=>result.json()).then(d=>setdata(d.hits));
          },[data]);
          
          
          return (
    <div className="pixabay_app">
         <header className='Pixaby_header' >
            <nav className='Pixaby_nav'>
                  <div><i className={"fa-solid fa-camera"}></i><h1>PIXABY</h1></div>
                 <div> Explore 
                  <i className={"fa-solid fa-chevron-down"}></i>
                  
                  <i className={"fa-solid fa-bell"}></i>
                  <button className='upload_button'>Upload</button>
                  </div>
                  
            </nav>
            <main className='pixaby_main'>
                  <h1>Stunning royalty-free images & royalty-free stock</h1>
                 <div>
                   <h3>Over 4.1 million+ high quality stock images,videos and music shared by our talented community.</h3>
                  <input type="text" onKeyUp={(x)=>{setsearch(x.target.value)}} className='search_input' placeholder='Search image here. What do you want.'/>
            </div>
            </main>
            
         </header>

          <div className='fetching_img'>
          {data.map((e)=>{
            return(
                  <section key={e.id}>
                    <img src={e.webformatURL} alt=""/>
                  </section>
               
            )
          })}
          </div>
         
    
    </div>
  )
}
export default App