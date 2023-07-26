import React, { useState } from "react";
import styled from "styled-components";
import AccountSection from "../../components/AccountSection";
import { useSelector, useDispatch } from "react-redux";
import EditInfosForm from "../../components/EditInfosForm";
import { editUser } from "../../features/userSlice";

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
  const userFullName = user ? user.firstName + " " + user.lastName : null;
  const userName = useSelector((state) => state.user.user.userName);
  const dispatch = useDispatch();
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEditMode = () => {
    setFormVisible(!isFormVisible);
  };

  const handleSave = () => {
    setFormVisible(!isFormVisible);
    const token = localStorage.getItem("token")
    dispatch(editUser({userName, token}))
  };

  const handleCancel = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <UserContainer>
      {isFormVisible ? (
        <EditInfosForm handleSave={handleSave} handleCancel={handleCancel} />
      ) : null}
      {!isFormVisible ? (
        <>
          <UserTitle>
            Welcome back
            {userFullName ? <UserName>{userFullName} !</UserName> : null}
          </UserTitle>
          <EditButton onClick={handleEditMode}>Edit name</EditButton>
        </>
      ) : null}
      <AccountSection
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
      />
      <AccountSection
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
      />
      <AccountSection
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
      />
    </UserContainer>
  );
}

export default User;
