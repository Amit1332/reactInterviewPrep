import React, { useState } from 'react'

const Conditional = () => {
    const [val,setVal] = useState(true)
  return (
    <div>
      

 {
    val ? <Comp1/> : <Comp2/>
 }

    <button onClick={()=> setVal(!val)}>Change</button>
    </div>
  )
}

export default Conditional


function Comp1(){
    return(
        <div className="container">
    <h1>Hello This is Component 1</h1>
    
    </div>
    )
}


function Comp2(){
    return(
        <div className="container">
    <h1>Hello This is Component 2</h1>
    
    </div>
    )
}
