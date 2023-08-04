import React, { useEffect } from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import InfoCard from "../../components/InfoCard";
import chatLogo from "../../assets/icon-chat.webp";
import moneyLogo from "../../assets/icon-money.webp";
import securityLogo from "../../assets/icon-security.webp";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { device } from "../../utils/styles/devices";


const HomeConatainer = styled.div`
`;
const CardContainer = styled.div`
display: flex;
  flex-direction: column;
  @media ${device.laptop} {
    flex-direction: row;
  }
`

function Home() {

  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  
  useEffect(() => {
    if (token && !sessionStorage.getItem('firstLoadDone')) {
      navigate("/user");
      sessionStorage.setItem('firstLoadDone', true);
    }
  }, [token, navigate]);

  return (
    <HomeConatainer>
      <Banner />
      <CardContainer>
      <InfoCard
        logo={chatLogo}
        alt="chat logo"
        title="You are our #1 priority"
        text="Need to talk to a representative? You can get in touch through our 24/7 chat or through
         a phone call in less than 5 minutes."
      />
      <InfoCard
        logo={moneyLogo}
        alt="money Logo"
        title="More savings means higher rates"
        text="The more you save with us, the higher your interest rate will be!"
      />
      <InfoCard
        logo={securityLogo}
        alt="security Logo"
        title="Security you can trust"
        text="We use top of the line encryption to make sure your data and money is always safe."
      />
      </CardContainer>
    </HomeConatainer>
  );
}

export default Home;
