import React from 'react'
import './Home.css'
import penta from '../Image/penta.jpg'
function Home() {
  return (
    <>
    <div style={{backgroundImage:`url(${penta})` ,height:'500px'}}>
<div className='heading'>
    <h1> Mastering The Future</h1>
    <h4> Training and Placement Institute </h4>

</div>
    </div>
    </>
  )
}

export default Home