import { useEffect, useRef } from "react";


export default function ParticalsBackground() {
  const canvasRef = useRef(null);  // here the element stored constantly in ref
useEffect(() => {
  const canvas = canvasRef.current;   // accessing the canvas element
  const ctx = canvas.getContext("2d") // getting the context of canvas

  let particles = [];  // array to store particles
  const particlesCount = 50;  // number of particles
  const colors = ["rgba(255,255,255,0.7)"];  // colors of particles

  class Particle {
    constructor(){
      this.x = Math.random() * canvas.width; // random x position
      this.y = Math.random() * canvas.height; // random y position  
      this.radius = Math.random() *2+1; // random radius
      this.color = colors[Math.floor(Math.random() * colors.length)]; // random color from colors array
      this.speedX = (Math.random() - 0.5 ) * 0.5; // random speed in x direction
      this.speedY = (Math.random() - 0.5 ) * 0.5; //  random speed in y direction
    }

    draw(){
      ctx.beginPath(); // begin path
      ctx.arc(this.x , this.y , this.radius , 0 , Math.PI*2); // draw circle
      ctx.shadowBlur = 10;
      ctx.shadowColour = this.color
    }
  }
})

  return (
    <canvas className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    
    ref={canvasRef}
    >

    </canvas>
  )
}