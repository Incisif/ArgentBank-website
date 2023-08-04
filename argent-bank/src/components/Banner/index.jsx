import styled from "styled-components";
import bannerImg from "../../assets/bank-tree.webp";
import { device } from "../../utils/styles/devices";


const BannerImg = styled.div`
background-image: url('${bannerImg}');
background-position: 0 -50px;
background-size: cover;
background-repeat: no-repeat;
height: 300px;
position: relative;
@media ${device.laptop} {
  height: 400px;
  background-position: 0% 33%;
}
`;
const BannerContent = styled.section`
position: relative;
top: -15rem;
width: 200px;
background: white;
padding: 2rem;
text-align: left;
margin: 0 auto;
@media ${device.laptop} {
  position: absolute;
  top: 110px;
  right: 50px;
  width: 300px;
  margin: 2rem;
} 
`;
const BannerTextBold = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;
const BannerTextNormal = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

function Banner() {
  return (
    <>
      <BannerImg />
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
    </>
  );
}

export default Banner;
