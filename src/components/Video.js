import React from 'react'
import perfumeshop from '../assets/perfumeshop.mp4';
import  '../Styles/AboutUsS.scss';


const Video = () => {
  return (
    
    
    <div className='main'>
        <div className="overlay"></div>
        <video src={perfumeshop} autoPlay loop muted />
        <div className="content">
            <h1>Welcome</h1>
            <p>To my site.</p>
        </div>
    </div>
    



    
  )
}
export default Video