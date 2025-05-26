import React from 'react'
// import Nav from './component/nav/Nav'
import Hero from './pages/dataScience/hero/Hero'
import Join from './pages/dataScience/join/Join'
import Learn from './pages/dataScience/learn/Learn'
import WhoThisFor from './pages/dataScience/whoThisFor/WhoThisFor'
import Apply from './pages/dataScience/apply/Apply'
import Testimonial from './pages/dataScience/testimony/Testimony'
 


const DataScience = () => {
  return (
    <>
    {/* <Nav/> */}
    <Hero/>
    <Join/>
    <Learn/>
    <WhoThisFor/>
    <Testimonial/>
    <Apply/> 
    </>
  )
}

export default DataScience