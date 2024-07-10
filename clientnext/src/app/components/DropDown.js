'use client'
import React, { useState } from "react";
import styled from "styled-components";
import Image from 'next/image'


const DropdownComp = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.InsideBox);
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState(""); // State to store newly added item
  const [options, setOptions] = useState(props.options); // State to manage dropdown options

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setOptions([...options, newItem]); // Add new item to options list
      setNewItem(""); // Clear the input field after adding the item
    }
  };

  return (
    <MainContainer>
      <OutsideBoxText>{props.OutsideBoxText}</OutsideBoxText>
      <DropDownContainer isOpen={isOpen}>
        <CustomDropdownHeader color={props.color} onClick={toggleDropdown}>
          <InsideText fcolor={props.fcolor}>{selectedOption || props.InsideBox}</InsideText>
          <DropdownIcon>
            <Image
              src="/assets/Components/Expand_down.png"
              alt="Dropdown Icon"
              width={15} height={15}
            />
          </DropdownIcon>
        </CustomDropdownHeader>
        {isOpen && (
          <DropdownOptions>
            {options.map((option, index) => (
              <DropdownOption
                key={index}
                onClick={() => {
                  handleSelection(option);
                  toggleDropdown();
                }}
              >
                {option}
              </DropdownOption>
            ))}
            <AddItemContainer>
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
              />
              <button onClick={handleAddItem}>Add</button>
            </AddItemContainer>
          </DropdownOptions>
        )}
      </DropDownContainer>
    </MainContainer>
  );
};

export { DropdownComp };

const MainContainer = styled.div``;

const OutsideBoxText = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-family: "merienda";
  font-weight: 600;
  color: #ffdef4;
`;

const DropDownContainer = styled.div`
  position: relative;
`;

const CustomDropdownHeader = styled.div`
  background-color: ${(props) => props.color || '#FFDEF4'};
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
`;

const DropdownOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #ffdef4;
  border-top-right-radius:0px;
  overflow: hidden;
  z-index: 1;
`;

const DropdownOption = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f0c0e0;
  }
`;

const AddItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  input {
    flex: 1;
    margin-right: 8px;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 6px 12px;
    border-radius: 4px;
    border: none;
    background-color: #FF0065;
    color: white;
    cursor: pointer;
  }

  button:hover {
    box-shadow: 0px 4px 5px 0px rgb(0,0,0,0.6) ;
  }
`;

const InsideText = styled.div`
      font-size:14px;
      color: ${(props)=>props.fcolor || "#ff0065"};
      font-weight:400;
      font-family: "merienda";
`;