import React, { useState } from 'react'
import Child from './Child'

const DayOne = () => {
    const [ data,setData] = useState([
        {
            name:"amit",
            age:23,
            batch:"Ea24",
            course:"mern"
        },
        {
            name:"Rahul",
            age:24,
            batch:"Ea25",
            course:"mern"
        }
    ])
  return (
    <div>
             <h1>This is Parent</h1>

              <Child name={data} />
      
    </div>
  )
}

export default DayOne
