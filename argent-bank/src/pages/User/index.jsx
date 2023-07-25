import React, { useState } from "react";
import styled from "styled-components";
import AccountSection from "../../components/AccountSection";
import { useSelector } from "react-redux";
import EditInfosForm from "../../components/EditInfosForm";

const UserContainer = styled.div`
  background-color: #12002b;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserTitle = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;
const UserName = styled.p`
  color: #fff;
  margin: 0;
`;
const EditButton = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 2rem;
`;

function User() {
  const user = useSelector((state) => state.user.user);
  const userName = user ? user.firstName + " " + user.lastName : null;
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEdit = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <UserContainer>
      <EditInfosForm></EditInfosForm>
      {!isFormVisible ? (
        <>
          <UserTitle>
            Welcome back
            {userName ? <UserName>{userName} !</UserName> : null}
          </UserTitle>
          <EditButton onClick={handleEdit}>Edit name</EditButton>
        </>
      ) : null}
      <AccountSection
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
      ></AccountSection>
      <AccountSection
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
      ></AccountSection>
      <AccountSection
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
      ></AccountSection>
    </UserContainer>
  );
}
export default User;
