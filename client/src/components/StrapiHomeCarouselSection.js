import React from 'react'
import styled from 'styled-components'

function StrapiHomeCarouselSection() {
  return (
    <MainContainer>
        <TagLine>
            <p>Explore, embrace, and let your shopping adventure begin...</p>
        </TagLine>
        
        
    </MainContainer>
  )
}

export default StrapiHomeCarouselSection

const MainContainer = styled.div`
    padding : 50px;
    background-color: #FFEDF4;

`

const TagLine = styled.div`
    text-align: center;
    >p{
        color: #ff0065;
        font-family: "Merienda";
    }
`;