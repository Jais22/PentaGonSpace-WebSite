import React from 'react'
import plogo3 from '../Image/plogo3.jpg';
import './List.css';
import { Link } from 'react-router-dom';
function List() {
    return (
        <>
            <header>
                <div className='container-container-flex'>
                    <div className="logoContainer">
                        <img src={plogo3} alt="logo" className="logo" />
                    </div>
                    <nav className='navbar'>
                        <div className='List'>
                            <Link to="/" className='listitem'>Home</Link>
                            <Link to="about" className='listitem'>About</Link>
                            <Link to="/courses" className='listitem'>Courses</Link>
                            <Link to="/contact" className='listitem'>Contact</Link>
                            <Link to="/gallery" className='listitem'>Gallery</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default List