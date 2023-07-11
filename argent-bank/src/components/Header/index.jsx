import Styled from "styled-components";
import argentBankLogo from "../../assets/argentBankLogo.png";
import { NavLink } from 'react-router-dom'

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
  &:hover{text-decoration: underline;}
`;
const StyledNavLink = Styled(NavLink)`
font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
`;
const LinkText = Styled.span`
margin-left: 5px;`;
const LinkLogo = Styled.i`
font-size: 16px;
`;

const Header = () => {
  return (
    <HeaderNav>
      <HeaderLogo src={argentBankLogo} alt="Argent Bank Logo" />
      <NavItem>
        <StyledNavLink to="/signIn">
          <LinkLogo>
            <i className="fa fa-user-circle"></i>
          </LinkLogo>
          <LinkText>Sign In</LinkText>
        </StyledNavLink>
      </NavItem>
    </HeaderNav>
  );
};
export default Header;
