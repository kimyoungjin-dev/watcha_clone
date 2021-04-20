import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Login() {
  return (
    <Container>
      <Image src="https://cdn.dribbble.com/users/4597873/screenshots/15118299/media/86f17667edbf10a2560a6eef2e60c454.png?compress=1&resize=1600x1200" />
    </Container>
  );
}
