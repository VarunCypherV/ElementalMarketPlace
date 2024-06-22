'use client'
import React, { useState, useRef } from "react";
import styled from "styled-components";
import Image from 'next/image'

const ChangeBox = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.InsideBox);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const handleSelection = (option) => {
    setSelectedOption(option);
    setIsEditing(false);
  };

  const handleIconClick = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };

  const handleInputChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <MainContainer>
      <OutsideBoxText>{props.OutsideBoxText}</OutsideBoxText>
      <DropDownContainer>
        <CustomDropdownHeader >
          {isEditing ? (
            <>
              <InputField
                ref={inputRef}
                type="text"
                value={selectedOption}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                autoFocus
              />
              <DropdownIcon>
                <Image
                  src="/assets/Components/Change.png"
                  alt="Dropdown Icon"
                  width={500} height={500}
                />
              </DropdownIcon>
            </>
          ) : (
            <>
           <InsideText>{props.Password ? "************" : selectedOption || props.InsideBox}</InsideText> 
              <DropdownIcon onClick={handleIconClick}>
                <Image
                  src="/assets/Components/Change.png"
                  alt="Dropdown Icon"
                  width={500} height={500}
                />
              </DropdownIcon>
            </>
          )}
        </CustomDropdownHeader>
      </DropDownContainer>
    </MainContainer>
  );
};

export { ChangeBox };

const MainContainer = styled.div`
    margin-bottom: 25px;
`;

const InputField = styled.input`
  flex: 1;
  border: 0px;
  background-color: transparent;
  font-size: 14px;
  font-family: "merienda";
  font-weight: 600;
  color: #ffdef4;
  &:focus {
    outline: none;
    border: 0px;
  }
`;

const OutsideBoxText = styled.div`
  margin-bottom: 5px;
  margin-left:25px;
  
  font-size: 14px;
  font-family: "merienda";
  font-weight: 600;
  color: #ffdef4;
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const CustomDropdownHeader = styled.div`
  background-color: #c90050;
  padding: 5px 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DropdownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 25px;
`;

const InsideText = styled.div`
  font-size: 14px;
  color: #FFDEF4;
  font-weight: 400;
  font-family: "merienda";
  ${props => props.password && 'visibility: hidden;'}
`;
