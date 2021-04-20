import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  background-color: white;
  padding: 15px 0px;
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  &:nth-child(2) {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &::placeholder {
    color: ${(props) => props.theme.silverColor};
    padding-left: 5px;
    font-size: 13px;
  }
`;

export default Input;
