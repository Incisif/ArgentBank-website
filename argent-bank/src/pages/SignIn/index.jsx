
import styled from "styled-components";
import AuthForm from "../../components/AuthForm";

const SignInContainer = styled.div`
  background-color: #12002b;
  flex-grow: 1;
`;



function SignIn() {
  return (
    <SignInContainer>
      <AuthForm />
    </SignInContainer>
  );
}
export default SignIn;
