import React from 'react'
import {useNavigate} from 'react-router-dom'

const Student = (props) => {
    const Navigate = useNavigate()
    
  return (
    <div>
   
    <div className="container">
    <table border='1'>
     <thead>

     <tr>
     <td>Name</td>
     <td>age</td>
     <td>Batch</td>
     <td>Course</td>
     <td>Action</td>

     


     </tr>
     </thead>
     <tbody>
     
     {
        props.name.map((elem,index)=>{
        return(
            <>
            <tr>          
            <td>{elem.name}</td>
            <td>{elem.age}</td>
            <td>{elem.batch}</td>
            <td>{elem.course}</td>
            <td onClick={()=> Navigate(`/student/${index}`)}>edit</td>


            </tr>
            </>
        )
        })

     }
     </tbody>
     </table>
    </div>

      
    </div>
  )
}

export default Student
