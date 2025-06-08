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
import Newsletter from './HomePage/components/Newsletter'

const ProductDesign = () => {
  return (
    <div>
        
        <ProductHero/>
        <Program/>
        <Learn/>
        <WhoApply/>
        <ProgramDetails/>
        <Testimony/>
        <Community/>
        <Newsletter/>
      
    </div>
  )
}

export default ProductDesign