import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import About from  "./Components/About";
import Courses from "./Components/Courses"
import Gallery from"./Components/Gallery";
import List from"./Components/List";
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <List/>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/about'element={<About />} />
      <Route path='/courses'element={<Courses />} />
      <Route path='/contact'element={<Contact />} />
      <Route path='/gallery'element={<Gallery />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App