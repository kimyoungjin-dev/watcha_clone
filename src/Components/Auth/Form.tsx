import styled from "styled-components";

const Form = styled.form`
  border-radius: 5px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input :first-child {
    background-color: red;
    margin-top: 100px;
  }
`;

export default Form;
