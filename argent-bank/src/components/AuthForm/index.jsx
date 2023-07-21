import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, toggleRememberMe  } from "../../features/userSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const Icon = styled.i`
  font-size: 16px;
`;
const Tiltle = styled.h2`
  font-weight: bold;
`;
const Form = styled.form``;

const Label = styled.label`
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;
const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;
const RememberMeWrapper = styled.div`
  display: flex;
`;
const RememberMeLabel = styled.label`
  margin-left: 0.25rem;
`;
const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  border: none;
  cursor: pointer;
`;
function AuthForm() {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const rememberMe = useSelector((state) => state.auth.rememberMe)
  const navigate = useNavigate();

  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setUsername(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const loginCredentials = { email, password };
    dispatch(loginUser(loginCredentials));
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/user");
    }
  }, [loggedIn, navigate]);

  return (
    <Container>
      <Icon>
        <i className="fa fa-user-circle sign-in-icon"></i>
      </Icon>
      <Tiltle>Sign In</Tiltle>
      <Form onSubmit={handleSignIn}>
        <Wrapper>
          <Label htmlFor="email">Username</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={handleChange}
          ></Input>
        </Wrapper>
        <Wrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
          ></Input>
        </Wrapper>
        <RememberMeWrapper>
          <Input type="checkbox" id="rememberMe" checked={rememberMe} onChange={() => dispatch(toggleRememberMe())} ></Input>
          <RememberMeLabel htmlFor="rememberMe">Remember me</RememberMeLabel>
        </RememberMeWrapper>
        <Button onClick={handleSignIn}>Sign In</Button>
      </Form>
    </Container>
  );
}

export default AuthForm;
