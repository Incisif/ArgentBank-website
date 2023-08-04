import Styled from "styled-components";
import argentBankLogo from "../../assets/argentBankLogo.webp";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";

const LogoContainer = Styled(NavLink)`
`;

const HeaderLogo = Styled.img`
max-width: 100%;
  width: 200px;
`;
const HeaderNav = Styled.nav`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;
const NavItem = Styled.div`
  margin-right: 0.5rem;
  cursor: pointer;
  
`;
const StyledNavLink = Styled(NavLink)`
font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
  &:hover{text-decoration: underline;}
`;
const LinkText = Styled.span`
margin-left: 5px;
&:hover{text-decoration: underline;}`;

const LinkLogo = Styled.i`
font-size: 16px;
margin-right: 0.5rem;
`;
const Logout = Styled.span`
font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
&:hover{text-decoration: underline;}
`;

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    dispatch(logout());
  };
  const user = useSelector((state) => state.user.user);
  const userName = user?.userName;

  return (
    <HeaderNav>
      <LogoContainer to="/">
        <HeaderLogo src={argentBankLogo} alt="Argent Bank Logo" />
      </LogoContainer>
      <NavItem>
        <StyledNavLink to="/signIn">
          <LinkLogo>
            <i className="fa fa-user-circle"></i>
          </LinkLogo>
          {user ? userName : <LinkText>Sign In</LinkText>}
        </StyledNavLink>
        {user && (
          <Logout onClick={handleLogout}>
            <LinkLogo>
              <i className="fa fa-sign-out"></i>
            </LinkLogo>
            Sign out
          </Logout>
        )}
      </NavItem>
    </HeaderNav>
  );
};
export default Header;
