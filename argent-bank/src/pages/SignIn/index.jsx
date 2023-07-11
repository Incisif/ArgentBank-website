import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SignInContainer = styled.div`
  background-color: #12002b;
  flex-grow: 1;
`;

const SignInContent = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;
const ContentIcon = styled.i`
  font-size: 16px;
`;
const ContentTiltle = styled.h2`
  font-weight: bold;
`;
const ContentForm = styled.form``;
const FormLabel = styled.label`
font-weight: bold;`;
const FomrInputWrapper = styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;`;
const FormInput = styled.input`
padding: 5px;
  font-size: 1.2rem;`;
const RememberMeWrapper = styled.div`
display: flex;`
const RememberMeLabel = styled.label`
margin-left: 0.25rem;`
const SignInButton = styled(NavLink)`
display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;`

function SignIn() {
  return (
    <SignInContainer>
      <SignInContent>
        <ContentIcon>
          <i className="fa fa-user-circle sign-in-icon"></i>
        </ContentIcon>
        <ContentTiltle>Sign In</ContentTiltle>
        <ContentForm>
          <FomrInputWrapper>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput type="text" id="username"></FormInput>
          </FomrInputWrapper>
          <FomrInputWrapper>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" id="password"></FormInput>
          </FomrInputWrapper>
          <RememberMeWrapper>
          <FormInput type="checkbox" id="remember-me"></FormInput>
          <RememberMeLabel htmlFor="remember-me">Remember me</RememberMeLabel>
          </RememberMeWrapper>
            <SignInButton to="/User">Sign In</SignInButton>
        </ContentForm>
      </SignInContent>
    </SignInContainer>
  );
}
export default SignIn;
