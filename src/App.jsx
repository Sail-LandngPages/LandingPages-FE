
import Homepage from "./pages/HomePage/Homepage"
import Softwaredev from "./pages/Software/Softwaredev"
import ProductDesign from "./pages/ProductDesign"


import DataScience from "./Datascience"
import Homepage from "./pages/HomePage/Homepage"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./static/Header"
import Footer from "./static/Footer"

function App() {
  return(
    <>
      {/* <Homepage/> */}

      <Softwaredev/>

      <ProductDesign/>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/data-science" element = {<DataScience/>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
