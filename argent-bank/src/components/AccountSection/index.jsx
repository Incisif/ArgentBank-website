import styled from "styled-components";
import TransactionButton from "../TransactionButton";
import { device } from "../../utils/styles/devices";
import PropTypes from "prop-types";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;
const ContentTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;
const Amount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;
const Description = styled.p`
margin: 0;`;

function AccountSection({ title, amount }) {
  return (
    <Container>
      <ContentWrapper>
        <ContentTitle>{title}</ContentTitle>
        <Amount>{amount}</Amount>
        <Description>Available Balance</Description>
      </ContentWrapper>
      <TransactionButton text="View transactions" />
    </Container>
  );
}

AccountSection.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default AccountSection;
