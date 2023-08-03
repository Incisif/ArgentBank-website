import styled from "styled-components";
import { useSelector, useDispatch  } from "react-redux";
import { updateEditingUserName } from "../../features/userSlice";
import PropTypes from "prop-types";

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
  align-items: center;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label``;

const Input = styled.input`
  height: 2rem;
  border-radius: 5px;
  margin: 0.3rem;
  &:disabled {
    background-color: #c4c4c4;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  width: 40%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

function EditInfosForm({ handleSave, handleCancel }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const firstName = user.firstName;
  const lastName = user.lastName;
  const userName = user.userName;

  const handleChange = (e) => dispatch(updateEditingUserName(e.target.value));
  

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
            placeholder={userName}
            defaultValue={userName}
            onChange={handleChange}
          ></Input>
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="FirstName">First name:</Label>
          <Input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder={firstName}
            disabled={true}
          ></Input>
        </FieldContainer>
        <FieldContainer>
          <Label htmlFor="LastName">First name:</Label>
          <Input
            type="text"
            id="LastName"
            name="LastName"
            placeholder={lastName}
            disabled={true}
          ></Input>
        </FieldContainer>
      </Form>
      <ButtonContainer>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </ButtonContainer>
    </Container>
  );
}

EditInfosForm.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default EditInfosForm;
