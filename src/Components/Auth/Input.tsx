import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 15px 0px;
  padding-left: 5px;
  background-color: white;

  &::placeholder {
    color: ${(props) => props.theme.silverColor};
    padding-left: 5px;
    font-size: 13px;
  }
`;

export default Input;
