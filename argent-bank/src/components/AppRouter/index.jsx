import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer";
import GlobaleStyles from "../../utils/styles/GlobalStyles";
import Home from "../../pages/Home";
import User from "../../pages/User";
import SignIn from "../../pages/SignIn";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../features/userSlice";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function ProtectedRoute() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status } = useSelector((state) => state.user);

  useEffect(() => {
    async function getUserData() {
      // Check if the user is not already loaded and the status is not loading
      if (status !== "loading" && !user) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
          try {
            // Call the thunk to fetch user data using the token
            // The fetchUser thunk should handle the API request and update the user data in the Redux store
            dispatch(fetchUser(token));
          } catch (error) {
            // Redirect to the sign-in page if there is an error with the token or fetching data
            navigate("/signIn");
          }
        } else {
          // Redirect to the sign-in page if there is no token in the localStorage or sessionStorage
          navigate("/signIn");
        }
      }
    }
    getUserData();
  }, [user, status, navigate, dispatch]);
  
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
