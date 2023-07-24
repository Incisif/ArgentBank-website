import Styled from "styled-components";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { logout } from "../../features/userSlice";


const LogoContainer = Styled(NavLink)`
cursor: pointer;

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
  
`;
const StyledNavLink = Styled(NavLink)`
font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;
const LinkText = Styled.span`
margin-left: 5px;
&:hover{text-decoration: underline;}`;

const LinkLogo = Styled.i`
font-size: 16px;
`;
const Logout = Styled.span`
font-weight: bold;
  color: #2c3e50;
&:hover{text-decoration: underline;}
`;


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedIn);
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    dispatch(logout())
  };
  const user = useSelector((state) => state.user.user);
  const firstName = user?.firstName;

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
          {loggedIn ? firstName:<LinkText>Sign In</LinkText>}
        </StyledNavLink>
          {loggedIn &&<Logout onClick={handleLogout}><i className="fa fa-sign-out"></i>Sign out</Logout>}
      </NavItem>
    </HeaderNav>
  );
};
export default Header;
