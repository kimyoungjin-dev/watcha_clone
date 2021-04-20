import styled from "styled-components";

export const LoginHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  align-items: center;
  &:first-child {
    color: white;
    font-weight: bold;
  }
`;

export const ForgotPassword = styled.span`
  color: ${(props) => props.theme.silverColor};
  font-size: 12px;
  cursor: pointer;
`;

export const Separator = styled.div`
  margin: 19px 0px;
  div {
    background-color: ${(props) => props.theme.silverColor};
    height: 1px;
    width: 100%;
  }
`;

export const OtherLogin = styled.div`
  margin: 18px 0px;
  span {
    font-size: 12px;
    color: silver;
  }
`;

export const IconBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
`;
