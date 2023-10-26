import React from 'react'

const Child = (props) => {
    console.log(props);
  return (
    <div>
     
     <table border='1'>
     <thead>

     <tr>
     <td>Name</td>
     <td>age</td>
     <td>Batch</td>
     <td>Course</td>
     


     </tr>
     </thead>
     <tbody>
     
     {
        props.name.map((elem)=>{
        return(
            <>
            <tr>          
            <td>{elem.name}</td>
            <td>{elem.age}</td>
            <td>{elem.batch}</td>
            <td>{elem.course}</td>

            </tr>
            </>
        )
        })

     }
     </tbody>
     </table>
      
    </div>
  )
}

export default Child
