import styled from "styled-components";
import { useSelector, useDispatch  } from "react-redux";

const Container = styled.section`
  width: 350px;
  height: 300px;
  background-color: white;
  margin: 3rem 0 3rem 0;
`;

const Title = styled.h2``;

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;`;
const FieldContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label``;
const Input = styled.input`
height: 2rem;
border-radius: 5px;
margin: 0.3rem;`
;
function EditInfosForm() {
    const user = useSelector((state) => state.user.user);
    const firstName =  user.firstName 
    const lastName =  user.lastName
  return (
    <Container>
      <Title> Edit user info</Title>
      <Form>
        <FieldContainer>
          <Label htmlFor="username">User name:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="User name"
          ></Input>
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="FirstName">First name:</Label>
          <Input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder={firstName}
          ></Input>
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="LastName">First name:</Label>
          <Input
            type="text"
            id="LastName"
            name="LastName"
            placeholder={lastName}
          ></Input>
        </FieldContainer>
      </Form>
    </Container>
  );
}
export default EditInfosForm;
