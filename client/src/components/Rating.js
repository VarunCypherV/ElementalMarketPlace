import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

function Rating(props) {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Components/1Star.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image2: file(relativePath: { eq: "Components/2Star.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image3: file(relativePath: { eq: "Components/3Star.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image4: file(relativePath: { eq: "Components/4Star.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image5: file(relativePath: { eq: "Components/5Star.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  let image;
  switch (props.stars) {
    case "1":
      image = getImage(data.image1);
      break;
    case "2":
      image = getImage(data.image2);
      break;
    case "3":
      image = getImage(data.image3);
      break;
    case "4":
      image = getImage(data.image4);
      break;
    case "5":
      image = getImage(data.image5);
      break;
    default:
      break;
  }

  return (
    <MainContainer>
      <Stars>
        {image && <GatsbyImage image={image} alt={props.altText} />}
      </Stars>
      <Number>({props.number})</Number>
    </MainContainer>
  );
}

export default Rating;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Stars = styled.div`
  /* flex: 1; */
`;

const Number = styled.div`
  margin-left: 10px;
  margin-bottom:2px;
  font-size: 14px;
  font-weight: 700;
`;
