import React from 'react'
import Layouts from '../layouts/Layouts'
import styled from 'styled-components'
import Card from '../components/Card'
import { StaticImage } from 'gatsby-plugin-image'


function FavouritePage() {
  return (
    <Layouts>
        <MainContainer>
    <Card offer="true" offerpercent="70% Off" mrp="₹1179" sp="₹359" name="CEAT (No- 6) Poplar Willow Cricket Bat" 
    image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41Z9QaAVyaL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"
    />
    </MainContainer>
    </Layouts>
  )
}

export default FavouritePage

const MainContainer=styled.div`

`;

const OptionsContainer=styled.div`

`;

const ContentContainer=styled.div`

`;