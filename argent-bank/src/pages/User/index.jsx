import React from "react";
import styled from "styled-components";
import AccountSection from "../../components/AccountSection";
import { useSelector } from "react-redux";

const UserContainer = styled.div`
  background-color: #12002b;
  flex-grow: 1;
`;
const UserTitle = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;
const UserName = styled.p`
color: #fff;
margin:0;
`

function User() {
  const user = useSelector((state) => state.user.user);
  const userName = user ? user.firstName + " " + user.lastName : null;
  return (
    <UserContainer>
      <UserTitle>
        Welcome back 
        {userName ? <UserName>{userName} !</UserName> : null}
        
      </UserTitle>
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
