import React from "react"

function Block(params: any) {
 return (
  <>
   <p className="content">
   <h1>{params.heading}</h1>
   <h2>{params.content}</h2>
   </p>
   <img src={params.image} alt={params.image} />
  </>
 )
}

export default Block