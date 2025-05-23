import React from 'react'
import ProductHero from '../ProductPage/ProductHero'
import Header from '../static/Header'
import Program from '../ProductPage/Program'
import Footer from '../static/Footer'
import ProgramDetails from '../ProductPage/ProgramDetails'
import Learn from '../ProductPage/Learn'
import WhoApply from '../ProductPage/whoApply'
import Testimony from '../ProductPage/Testimony'
import Community from '../ProductPage/Community'
import Faq from '../ProductPage/Faq'

const ProductDesign = () => {
  return (
    <div>
        <Header/>
        <ProductHero/>
        <Program/>
        <Learn/>
        <ProgramDetails/>
        <WhoApply/>
        <Testimony/>
        <Community/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default ProductDesign