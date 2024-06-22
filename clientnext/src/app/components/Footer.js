'use client'
import React from "react";
import styled from "styled-components";
import Image from 'next/image'

function Footer() {
  return (
    <MainContainer id="Footer">
      <Logof1>
        <ImageContainer>
          <Image src="/assets/LoginReg/Logo.png" alt="company logo" width={500} height={500} />
        </ImageContainer>
      </Logof1>
      <Companyf2>
        <HeaderText>Company</HeaderText>
        <LinkText>About Us</LinkText>
        <LinkText>Careers</LinkText>
      </Companyf2>
      <Productsf3>
        <HeaderText>Products</HeaderText>
        <LinkText>Elemental Blogs</LinkText>
        <LinkText>Elemental Marketplace</LinkText>
      </Productsf3>
      <ContactUsf4>
        <HeaderText>Contact Us</HeaderText>
        <LinkText>info@elemental.com</LinkText>
        <LinkText>1-800-200-300</LinkText>
        <LinkText>3500 Deer Creek Rd Palo Alto, CA</LinkText>
      </ContactUsf4>
      <Signupf5>
        <HeaderText>Sign Up</HeaderText>
        <LinkText>Subscribe to Our Elemental Newsletter!</LinkText>
        {/* <EmailContainer placeholder="email"/> */}
        <SubscribeContainer>
          <EmailInput placeholder="email" />
          <IconContainer>
            <Image2>
              <Image
                src="/assets/NavBarFooter/emailArrow.png"
                alt="email icon"
                width={500} height={500}
              />
            </Image2>
          </IconContainer>
        </SubscribeContainer>
      </Signupf5>
    </MainContainer>
  );
}

export default Footer;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 25px;
  padding-right: 25px;
  flex-wrap: wrap;
`;

const Logof1 = styled.div`
  flex: 1;
  margin: 10px;
`;

const ImageContainer = styled.div`
  width: 75%;
  height: 75%;
  min-width: 150px;
`;


const Image2 = styled.div`
  width: 50%;
  height: 50%;
`;

const Companyf2 = styled.div`
  flex: 1;
  margin: 10px;
`;

const Productsf3 = styled.div`
  flex: 1;
  margin: 10px;
`;

const ContactUsf4 = styled.div`
  flex: 1;
  margin: 10px;
`;

const Signupf5 = styled.div`
  flex: 1;
  margin: 10px;
`;

const HeaderText = styled.p`
  color: #ff0065;
  font-size: 18px;
  font-family: "montserrat";
  font-weight: 400;
`;

const LinkText = styled.p`
  font-size: 12px;
  font-family: "montserrat";
  font-weight: 400;
`;


const SubscribeContainer = styled.div`
  position: relative;
  border: 1px solid #ff0065;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const EmailInput = styled.input`
  margin-left: 15px;
  margin-right: 15px;
  padding: 8px;
  border: 0px solid;
  border-color: transparent;
  border-radius: 50px;
  margin-top: 2px;
  padding-right: 30px; /* Space for the icon */
  &:focus {
    outline: none;
    border-color: #ff0065;
  }
  &::placeholder {
    color: #ff0065;
    font-size: 12px;
    opacity: 0.6;
  }
  &:focus::placeholder {
    color: #ff0065;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
  pointer-events: none;
`;
