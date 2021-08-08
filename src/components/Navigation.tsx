import React from "react"
import Button from "@material-ui/core/Button"

function Navigation() {
 return (
  <>
   <nav>
    <h1>MyFlix</h1>
    <Button style={{background:'red' , color : "white" , fontWeight:"bold"}}>Sign In</Button>
   </nav>
  </>
 )
}

export default Navigation