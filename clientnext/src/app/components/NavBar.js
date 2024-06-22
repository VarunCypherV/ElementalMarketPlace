'use client'
import React from "react";
import styled from "styled-components";
import Image from 'next/image'

function NavBar() {
  return (
    <MainContainer>
      <LogoContainer>
        <ImageContainer>
          <Image src="/assets/LoginReg/Logo.png" alt="company logo" width={500} height={500} />
        </ImageContainer>
      </LogoContainer>

      <CategoryContainer>
        <CategoryButton>
          <CategoryButtonImg>
          <IconCat>
          <Image
              src="/assets/Home/CategoryButton.png"
              alt="company logo"
              width={500} height={500}
            />
          </IconCat>
            
          </CategoryButtonImg>
          <CategoryButtonText>
            <p>Category</p>
          </CategoryButtonText>
        </CategoryButton>
      </CategoryContainer>

      <SearchBarContainer>
        <SearchContainer>
          <IconContainer>
            <IconImage>
              <Image
                src="/assets/Home/Search_alt.png"
                alt="search icon"
                width={500} height={500}
              />
            </IconImage>
          </IconContainer>
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </SearchBarContainer>
      <IconsContainer>
        <IconView>
          <Icon>
            <Image src="/assets/Home/languageIcon.png" width={500} height={500} />
          </Icon>
        </IconView>
        <IconView>
          <Icon>
            <Image src="/assets/Home/Favorite.png"  width={500} height={500}/>
          </Icon>
        </IconView>
        <IconView>
          <Icon>
            <Image src="/assets/Home/Basket_alt_3.png" width={500} height={500}/>
          </Icon>
        </IconView>
        <IconView>
          <Icon>
            <Image src="/assets/Home/User.png" width={500} height={500}/>
          </Icon>
        </IconView>
      </IconsContainer>
    </MainContainer>

    // <Link to="/LoginRegister/userLogin">Login</Link>
  );
}

export default NavBar;

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  padding-left: 50px;
`;

const LogoContainer = styled.div`
  flex: 1;

`;

const CategoryContainer = styled.div`
  flex: 1;
  padding:20px;
  margin-right: 50px;
  max-width: 100px;
`;
const CategoryButton = styled.div`
  background-color: #ff0065;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  padding:5px 10px;
`;

const CategoryButtonImg = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right:5px;
`;

const CategoryButtonText = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  font-size:14px;
  color:white;
  > p {
    margin: 0;
  }
`;

const IconCat = styled.div`
    width:15px;
`;
const SearchBarContainer = styled.div`
  flex: 3;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 3;
`;

const Icon = styled.div`
  width: 25%;
  min-width: 20px;
`;

const ImageContainer = styled.div`
  width: 25%;
  height: 25%;
  min-width: 100px;
  margin:auto;
`;

const SearchContainer = styled.div`
  position: relative;
  border: 2px solid #ff0065;
  border-radius: 40px;
  margin-right: 50px;
`;

const SearchInput = styled.input`
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
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
    padding: 20px;
  }
  &:focus::placeholder {
    color: #ff0065;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  right: 0px;
`;

const IconImage = styled.div`
  width: 25px;
  height: 25px;
`;

const IconView = styled.div`
  flex: 1;
  margin-left: 25px;
`;
