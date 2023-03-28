import React from 'react'
import "./index.css"

function Background() {
    window.onload = function(){ 
        /* -- Glow effect -- */
        
        const blob = document.getElementById("blob");
        
        window.onpointermove = event => { 
          const { clientX, clientY } = event;
          
          blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
          }, { duration: 3000, fill: "forwards" });
        }
    }
  return (
    <div >
      <div id="blob"></div>
      <div id="blur"></div>
    </div>
  )
}

export default Background
