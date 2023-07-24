import React ,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import GlobaleStyles from "../../utils/styles/GlobalStyles";
import Home from "../../pages/Home";
import User from "../../pages/User";
import SignIn from "../../pages/SignIn";
import Header from "../Header";
import { useSelector } from "react-redux";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function ProtectedRoute() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signIn");
    }
  }, [user, navigate]);

  return user ? <User /> : null;
}

function AppRouter() {
  return (
    <Router>
      <GlobaleStyles />
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<ProtectedRoute />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default AppRouter;
