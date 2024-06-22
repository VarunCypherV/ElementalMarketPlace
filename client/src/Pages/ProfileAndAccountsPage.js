import React from "react";
import Layouts from "../layouts/Layouts";
import styled from "styled-components";
import { DropdownComp } from "../components/DropDown";
import { ChangeBox } from "../components/ChangeBox";
function ProfileAndAccountsPage() {
  const Details = {
    username: "Varun",
    Password: "whatusay2001",
    UniqueId: 123,
    EmailId: "aaa@gmail.com",
    PhoneNumber: 9788828282,
    Address:"18 maharaj street , kesvhav nagar bheem-600073",
    CardDetails : {
      CardBank:"HDFC",
      CardNumber:"1234 1242 1231 3112",
      CardCvv : "123",
      ExpiryDate:"10/26"
    },
    UPIDetails : {
        Bank : "HDFC",
        UPIID : "qwew@hdfc"
    }
  };

  return (
    <Layouts>
      <MainContainer>
        <HeaderText>Profile And Account</HeaderText>
        <ProfileContainers>
          <Row1>
            <PersonalInfo>
              <InnerHeaderText>Profile And Account</InnerHeaderText>
              <ChangeBox
                OutsideBoxText="Username"
                InsideBox={Details.username}
              />
              <ChangeBox
                OutsideBoxText="Password"
                InsideBox={Details.Password}
                Password={true}
              />
              <ChangeBox
                OutsideBoxText="Unique Id"
                InsideBox={Details.UniqueId}
              />
              <ChangeBox
                OutsideBoxText="Email Id"
                InsideBox={Details.EmailId}
              />
              <ChangeBox
                OutsideBoxText="Phone Number"
                InsideBox={Details.PhoneNumber}
              />
            </PersonalInfo>
            <BankDetails>
              <InnerHeaderText>Bank Details</InnerHeaderText>
              <ChangeBox
                OutsideBoxText="Bank"
                InsideBox={Details.CardDetails.CardBank}
              />
              <ChangeBox
                OutsideBoxText="Card Number"
                InsideBox={Details.CardDetails.CardNumber}
                
              />
              <ChangeBox
                OutsideBoxText="Card CVV"
                InsideBox={Details.CardDetails.CardCvv}
                Password={true}
              />
              <ChangeBox
                OutsideBoxText="Expiry Date"
                InsideBox={Details.CardDetails.ExpiryDate}
              />
              <ConfirmButton>

              </ConfirmButton>
               

             
            </BankDetails>
          </Row1>
          <Row2>
            <AddressDetails>
              <InnerHeaderText>Address Details</InnerHeaderText>
              
              <ChangeBox
                OutsideBoxText="Card CVV"
                InsideBox={Details.Address}
              />
              <Choosen>{Details.Address || "Nil"}</Choosen>
            </AddressDetails>
            <UPIDetails>
              <InnerHeaderText>UPI Details</InnerHeaderText>
              
              <ChangeBox
                OutsideBoxText="UPI ID"
                InsideBox={Details.UPIDetails.UPIID}
              />
              <Choosen>{Details.UPIDetails.UPIID || "Nil"}</Choosen>
            </UPIDetails>
          </Row2>
        </ProfileContainers>
      </MainContainer>
    </Layouts>
  );
}

export default ProfileAndAccountsPage;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  
`;

const HeaderText = styled.div`
  margin-bottom: 50px;
  font-size: 32px;
  font-family: "merienda";
  color: #ff0065;
  font-weight: 600;
`;

const ProfileContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PersonalInfo = styled.div`
  flex: 1;
  background-color: #ff0065;
  margin-right: 50px;
  margin-bottom: 50px;
  padding: 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const BankDetails = styled.div`
  flex: 1;
  background-color: #ff0065;
  margin-left: 50px;
  margin-bottom: 50px;
  padding: 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const AddressDetails = styled.div`
  flex: 1;
  background-color: #ff0065;
  margin-right: 50px;
  margin-bottom: 25px;
  padding: 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const UPIDetails = styled.div`
  flex: 1;
  background-color: #ff0065;
  margin-left: 50px;
  margin-bottom: 25px;
  padding: 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 2;
`;
const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const InnerHeaderText = styled.div`
  padding: 25px;
  font-size: 20px;
  font-family: "merienda";
  color: white;
  font-weight: 600;
`;

const Choosen = styled.div`
  background-color: #FFDEF4;
  padding: 5px 25px;
  margin-bottom: 25px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropDownContainer = styled.div`
  margin-bottom: 30px;
  
`;


const ConfirmButton = styled.div`

`;