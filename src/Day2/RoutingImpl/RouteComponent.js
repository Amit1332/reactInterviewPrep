import React, { useState,lazy,Suspense } from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './Home'
// import Student from './Student/Student'
import loading from '../1_e_Loq49BI4WmN7o9ItTADg.gif'
import Contact from './Contact'
import About from './About'
import Single from './Student/Single'
const Student = lazy(()=> import('./Student/Student'))

const RouteComponent = () => {
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
        },
        {
          name:"Rahul",
          age:24,
          batch:"Ea25",
          course:"mern"
      },
      ,
        {
          name:"Rahul",
          age:24,
          batch:"Ea25",
          course:"mern"
      },
      {
        name:"Rahul",
        age:24,
        batch:"Ea25",
        course:"mern"
    },
    {
      name:"Rahul",
      age:24,
      batch:"Ea25",
      course:"mern"
  },
  {
    name:"Rahul",
    age:24,
    batch:"Ea25",
    course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
  course:"mern"
},
{
  name:"Rahul",
  age:24,
  batch:"Ea25",
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
    <BrowserRouter>
    <div style={{marginTop:"50px",display:"flex",justifyContent:"space-around"}}>
     <Link to="/">Home</Link>
   <Link to="/student">Student</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>

    </div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/student' element={
    <Suspense fallback={<img className='load' src={loading}/>}>

      <Student name={data}/>
      </Suspense>
    
    }/>


    <Route path='/student/:id' element={<Single name={data}/>}/>

    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>

    
    
    </Routes>
    
    </BrowserRouter>
      
    </div>
  )
}

export default RouteComponent
