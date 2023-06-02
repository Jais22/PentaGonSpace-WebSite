import React from 'react'
import'./Courses.css';
import java from'../Image/java.jpg';
import python from'../Image/python.jpg';
import testting from'../Image/testing.jpg.png';
function Courses() {
  return (
    <>
    <div className='aboutback'>
        <center><h1 className='head'>Our Unified Course</h1></center>
        <div className="underline"></div>
    </div>
    <div className='course-details'>
        <div className='center'>
            <img src={java} alt="photo" classname='java-img'/>
            <h1> Java Full Stack</h1>
        </div>
    </div>
    <br></br>
    <div className='course-details'>
        <div className='center'>
            <img src={python} alt="photo" classname='java-img'/>
            <h1> Python Full Stack</h1>
        </div>
    </div>
    <br></br>

    <div className='course-details'>
        <div className='center'>
            <img src={testting} alt="photo" classname='java-img' style={{width:'100px',height:'100px'}} />
            <h1>Software Testing</h1>
        </div>
    </div>
    <br></br>
    </>
  )
}

export default Courses