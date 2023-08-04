import styled from "styled-components";
import AuthForm from "../../components/AuthForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignInContainer = styled.div`
  background-color: #12002b;
  flex-grow: 1;
`;

function SignIn() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/user");
    }
  }, [user, navigate]);

  return (
    <SignInContainer>
      <AuthForm />
    </SignInContainer>
  );
}

export default SignIn;
