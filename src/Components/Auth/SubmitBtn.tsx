import styled from "styled-components";

const SubmitBtn = styled.button`
  width: 100%;
  border-radius: 20px;
  border: none;
  outline: none;
  margin-top: 17px;
  background-color: ${(props) => props.theme.LogoColor};
  padding: 15px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.7s ease-in-out;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

export default SubmitBtn;
