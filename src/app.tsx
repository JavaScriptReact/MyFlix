import React , { useState , useEffect } from "react"
import { Switch, Route } from 'react-router-dom'
import gsap from "gsap"

import Navigation from './components/Navigation'
import HomePage from './containers/Homepage'
import Error from './containers/Error'


function App() {
 return (
  <>
  <div className="page" style={{transform:"translateY(0)"}}>
   <Navigation />
   <Switch>
    <Route path="/" exact>
     <HomePage />
    </Route>
    <Route path="*">
     <Error />
    </Route>
   </Switch>
   </div>
   <Parallax/>
  </>
 )
}

export default App

function Parallax() {
  const [color, setColor] = useState("red")
  const [height , setHeight] = useState(0)

  useEffect(() => {
   setHeight(document.body.clientHeight + window.innerHeight)
  } , [])

 function scrolling(event: any) {
  let data = event.target.scrollTop
  gsap.to(".page", 1, {
   y : -data ,
   scrub : true,
   ease:"none"
  })
  gsap.to(".thumb", .5, {
   height: data / document.body.clientHeight * 100 + "%",
   ease: "none",
   background: color === "red" ? "orange" : "red",
   onComplete : () => setColor(color ===  "red" ? "orange" : "red")
  })
 }

 return (
  <>
  <div className="parallax" onScroll={e => scrolling(e)}>
   <div style={{height:height}}></div>
   </div>
   <main className="scrollbar">
    <div className="thumb"></div>
   </main>
   </>
 )
}