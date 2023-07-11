import styled from "styled-components";

const InfoCardContainer = styled.div`
  flex: 1;
  padding: 2.5rem;
`;
const InfoCardLogo = styled.img`
width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;`
const InfoCardTitle = styled.h2`
color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;`
const InfoCardText = styled.p``

function InfoCard({ logo, title, text, alt }) {
  return( <InfoCardContainer>
    <InfoCardLogo src={logo} alt={alt} />
    <InfoCardTitle>{title}</InfoCardTitle>
    <InfoCardText>{text}</InfoCardText>
  </InfoCardContainer>)
}

export default InfoCard;
