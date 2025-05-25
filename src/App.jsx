
import Homepage from "./pages/HomePage/Homepage"
import Softwaredev from "./pages/Software/Softwaredev"
import ProductDesign from "./pages/ProductDesign"
import DataScience from "./Datascience"
import {BrowserRouter , Router, Routes, Route } from 'react-router-dom'
import Header from "./static/Header"
import Footer from "./static/Footer"


function App() {
  return(
    <>
      {/* <Homepage/> */}

      

     <BrowserRouter>
  
      <Header/>
      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/data-science" element = {<DataScience/>}/>
        <Route path= "/softwareDev" element={<Softwaredev/>}/>
        <Route path= "/productDesign" element={ <ProductDesign/>}/>
        
      </Routes>
      <Footer/>
   
    </BrowserRouter>

    </>
  )
}

export default App
