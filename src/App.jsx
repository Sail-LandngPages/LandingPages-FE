
import Homepage from "./pages/HomePage/Homepage"
import Softwaredev from "./pages/Software/Softwaredev"
import ProductDesign from "./pages/ProductDesign"
import DataScience from "./Datascience"
import {BrowserRouter , Router, Routes, Route } from 'react-router-dom'
import Header from "./static/Header"
import Footer from "./static/Footer"
import GameDev from "./pages/GameDev/GameDev"
import Blockchain from "./pages/BlockChain/Blockchain"
import GenAI from "./pages/GenAI/GenAI"


function App() {
  return(
    <>
     

      

     <BrowserRouter>
  
      <Header/>
      <Routes>
        <Route path="/" element={ <Homepage/>}/>
        <Route path="/data-science" element = {<DataScience/>}/>
        <Route path= "/softwareDev" element={<Softwaredev/>}/>
        <Route path= "/productDesign" element={ <ProductDesign/>}/>
        <Route path="/gameDev" element={<GameDev/>}/>
        <Route path="/blockChain" element={<Blockchain/>}/>
        <Route path="/generativeAI" element={<GenAI/>}/>
        
      </Routes>
      <Footer/>
   
    </BrowserRouter>

    </>
  )
}

export default App
