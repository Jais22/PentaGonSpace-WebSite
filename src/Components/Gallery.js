import React from 'react'
import './Gallery.css';
import image3 from '../Image/image3.jpeg';
import image7 from '../Image/image7.jpeg';
import image9 from '../Image/image9.jpeg';
import image10 from '../Image/image10.jpeg';
import image11 from '../Image/image11.jpeg';
import image13 from '../Image/image13.jpeg';
import image14 from '../Image/image14.jpeg';
import g1 from '../Image/g1.jpeg';
function Gallery()
 {
  return (
    <>

    <div className='aboutback'>
        <center><h1 className='head'>Gallery</h1></center>
        <div className="inderline"></div>
    </div>
    <div class="gallery">
<div class="img-container">
    <img src={image3} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image7} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image9} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image10} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image11} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image13} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={image14} alt="photo"className='photo'  />
</div>
<div class="img-container">
    <img src={g1} alt="photo"className='photo'  />
</div>
    </div>
    </>
  )
}

export default Gallery