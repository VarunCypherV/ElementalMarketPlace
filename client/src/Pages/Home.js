import React from "react";
import Layouts from "../layouts/Layouts";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import StrapiHomeCarouselSection from "../components/StrapiHomeCarouselSection";

function HomePage({ props }) {
  return (
    <MainContainer>
      <OfferLine>
        <p>
          The Elemental Origin Sale is Live!!!!! : Upto 90% off on Products and
          more...
        </p>
      </OfferLine>
      <LandingDiv>
        <NavBar2>
          <Logo>
            <StaticImage src="../assets/Home/ElemenWhiteHdpi.png" />
          </Logo>
          <Links>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link><StaticImage src="../assets/Home/User-1.png" /></Link>
          </Links>
        </NavBar2>
        <Content>
          <TagLinesButton>
            <HeaderText>
              <h1>Elemental</h1>
              <h1>Marketplace</h1>
            </HeaderText>
            <TagLinetext>
              <p>"From Our Heart to Your Cart: </p>
              <p>Elemental marketplace, Your Love Story"</p>
            </TagLinetext>

            <Buttons>
              <GButtons>
                <p>Shop</p>
              </GButtons>
              <NGButtons>
                <p>Discover</p>
              </NGButtons>
            </Buttons>
          </TagLinesButton>
          <HeroImage>
            <Image>
              <StaticImage src="../assets/Home/heroImage.png" />
            </Image>
          </HeroImage>
        </Content>
      </LandingDiv>
      <Layouts>
        <StrapiHomeCarouselSection/>
      </Layouts>
    </MainContainer>
  );
}

export default HomePage;

// export const query = graphql`
//   query MyQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
// npm install gatsby-source-filesystem  for graphyql layer of page folder

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const OfferLine = styled.div`
  min-height: 2vh;
  background-color: white;
  text-align: center;
  padding: 2px;
  > p {
    margin: 0;
    font-size: 14px;
    font-family: sans-serif;
  }
`;

const LandingDiv = styled.div`
  min-height: 98vh;
  background-color: #ff0065;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 100px;
`;

const NavBar2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  flex: 3;
`;

const Links = styled.div`
  flex:2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width:400px;
  > a {
    color: white;
    text-decoration: none;
    font-family: "Merienda"; 
    font-size: 22px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
const TagLinesButton = styled.div`
  flex: 3;
  margin-top: 50px;
  margin-right: 25px;
`;

const HeaderText = styled.div`
  margin-bottom: 25px;

  > h1 {
    color: white;
    font-family: "Merienda";
    font-size:50px;
    margin: 0;
    text-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    line-height: 79px;
  }
`;
const TagLinetext = styled.div`
  margin-top: 10px;
  > p {
    color: white;
    font-family: "Merienda";
    font-size: 22px;
    margin: 0;
  }
`;
const HeroImage = styled.div`
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  overflow: hidden;
  flex: 2;
  flex-shrink: 1;
  margin-top: 25px;
  display: flex; /* Add display flex */
  justify-content: flex-end;
  min-width: 400px;
`;

const Image = styled.div`
  
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 50px;
`;

const GButtons = styled.div`
  flex-grow: 1; /* Use flex-grow to distribute available space */
  background-color: #ff0065;
  border: 2px solid white;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-right: 25px;
  display: flex;
  max-width: 145px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  > p {
    font-size: 20px;
    font-family: "Merienda";
    color: white;
    margin:0px;
    font-weight: 700;
  }
`;

const NGButtons = styled.div`
  flex-grow: 1; /* Use flex-grow to distribute available space */
  background-color: white;
  border: 2px solid #ff0065;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  max-width: 145px;
  padding:10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.25);
  > p {
    font-size: 20px;
    font-family: "Merienda";
    margin: 0px;
    color: #ff0065;
    font-weight: 700;
  }
`;
