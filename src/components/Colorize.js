import React, { useState } from 'react'
import '../stylesheets/Colorize.css'
function Colorize() {
    const [color,setColor] = useState('#125125125')
    const getColor = ()=>{
        const anyColor = '#'+(Math.floor(Math.random() * 16777215)).toString(16);
        return anyColor;
    }
    const newColor = ()=>{
        const randomColor = getColor();
        console.log("Changing color to "+randomColor)
        setColor(randomColor);
    }
  return (
    <div>
      <center>
      <div className='colorBox' style={{backgroundColor: color}}  onDoubleClick={ newColor }  > {color} </div>
      <button className='btn' onClick={ newColor } >Change color</button>
      </center>
    </div>
  )
}
export default Colorize;
