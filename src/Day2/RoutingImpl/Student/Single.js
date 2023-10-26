import React from 'react'
import {useParams} from 'react-router-dom'

const Single = (props) => {
    const index  = useParams().id
    console.log("a");
  return (
    <div className='container'>
    {
       <div style={{background:"rgb(148, 12, 189)",display:"flex",fontSize:"20px",padding:"50px",width:"30%" ,borderRadius:"10px",color:"white"}}>
       <div className="left">
       <div className="box">Name</div>
        <div className="box">Age</div>
        <div className="box">Batch</div>
        <div className="box">Course</div>

       </div>

       <div className="right">
       <div className="box">{props.name[index].name}</div>
        <div className="box">{props.name[index].age}</div>
        <div className="box">{props.name[index].batch}</div>
        <div className="box">{props.name[index].course}</div>

       </div>
       
       </div>
       
    }

      
    </div>
  )
}

export default Single
