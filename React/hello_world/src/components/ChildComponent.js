// ChildComponent

import React from 'react'

const ChildComponent = ({greetHandler}) => {
  return (
    <>
     <button onClick={()=>greetHandler("child")}>Greet Parent</button>
     
    </>
   
  )
}

export default ChildComponent