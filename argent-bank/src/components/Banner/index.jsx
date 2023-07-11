import styled from "styled-components";
import bannerImg from "../../assets/bank-tree.jpeg";

const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
`;
const BannerImg = styled.img`
  background-position: 0 -50px;
  object-fit: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100%;
`;
const BannerContent = styled.section`
  position: absolute;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  margin: 0 auto;
`;
const BannerTextBold = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
`;
const BannerTextNormal = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerImg src={bannerImg} />
      <BannerContent>
        <BannerTextBold>
          <span>No fees.</span>
          <span>No minimum deposit.</span>
          <span>High interest rates.</span>
        </BannerTextBold>
        <BannerTextNormal>
          <span>Open a savings account with</span>
          <span>Argent Bank today!</span>
        </BannerTextNormal>
      </BannerContent>
    </BannerWrapper>
  );
}

export default Banner;
