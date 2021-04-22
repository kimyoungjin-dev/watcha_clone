import React from "react";
import styled from "styled-components";

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
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
