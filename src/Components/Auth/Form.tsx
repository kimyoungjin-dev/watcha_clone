import styled from "styled-components";

const Form = styled.form`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-sizing: border-box;
  flex-direction: column;
  #firstInput {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  #lastInput {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export default Form;
