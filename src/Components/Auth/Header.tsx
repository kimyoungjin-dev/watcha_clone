import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  text: string;
  link: string;
}

const SHeader = styled.div`
  background-color: transparent;
  margin-top: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`;

const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 42px;
`;

const WatchaTitle = styled.span`
  font-family: "Roboto", sans-serif;
  color: red;
  font-size: 30px;
  cursor: pointer;
`;

const SignUpWrapper = styled.div`
  border-radius: 30px;
  width: 84px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.fontColor};
`;

const SignUpText = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
`;

export default function Header({ text, link }: IProps) {
  return (
    <SHeader>
      <HeaderContents>
        <WatchaTitle>WATCHA</WatchaTitle>
        <SignUpWrapper>
          <Link to={link}>
            <SignUpText>{text}</SignUpText>
          </Link>
        </SignUpWrapper>
      </HeaderContents>
    </SHeader>
  );
}
