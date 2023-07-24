import styled from "styled-components";
import { device } from "../../utils/styles/devices";
const Button = styled.button`
display: block;
width: 100%;
padding: 8px;
font-size: 1.1rem;
font-weight: bold;
margin-top: 1rem;
border-color: #00bc77;
background-color: #00bc77;
color: #fff;
@media ${device.tablet} {
    width: 200px;
  }
`

function TransactionButton({ text, onClick }) {
    return (
        <Button onClick={onClick}>{text}</Button>
    );
}
export default TransactionButton;