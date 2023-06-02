import React from 'react'
import './About.css';
import pentagon from '../Image/pentagon.jpg';


function About() {
    return (
        <>
            <div className='aboutback'>
                <center><h1 className='head'>About Us </h1></center>
                <div className="underline"></div>
            </div>
            <div className='photos'>
                <img src={pentagon} alt="photo" className='photo' />
            </div>
            <div className="about">
                <p>Pentagon Space would be the focal point for the people who want to master
                    the future with niche technologies and the clients who are in search of  resources can be deployed from the
                    first day of the work.
                </p>
                <p> We are a team of passionate developers who love creating awesome apps.</p>
                <p> Our mission is to make the worlda better place through technology.</p>
            </div>

        </>
    )
}

export default About