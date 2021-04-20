import React from "react";
import styled from "styled-components";
import Header from "./Login/Header";
import Image from "./Login/Image";

interface IProps {
  children: React.ReactNode;
}

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 320px;
`;

export default function AuthLayout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Image src="https://cdn.dribbble.com/users/4597873/screenshots/15118299/media/86f17667edbf10a2560a6eef2e60c454.png?compress=1&resize=1600x1200" />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
