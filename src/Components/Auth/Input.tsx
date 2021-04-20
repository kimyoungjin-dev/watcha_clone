import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: white;
  padding: 15px 0px;
  padding-left: 5px;

  &::placeholder {
    color: ${(props) => props.theme.silverColor};
    padding-left: 5px;
    font-size: 13px;
  }
`;

export default Input;
