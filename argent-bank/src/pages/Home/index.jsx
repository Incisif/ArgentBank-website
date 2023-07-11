import React from "react";
import styled from "styled-components";
import Banner from "../../components/Banner";
import InfoCard from "../../components/InfoCard";
import chatLogo from "../../assets/icon-chat.png";
import moneyLogo from "../../assets/icon-money.png";
import securityLogo from "../../assets/icon-security.png";

const HomeConatainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <HomeConatainer>
      <Banner />
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
    </HomeConatainer>
  );
}

export default Home;
