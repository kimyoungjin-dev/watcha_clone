import styled from "styled-components";

const SImage = styled.img`
  width: 100%;
  height: 100vh;
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(0.4);
`;

interface IProps {
  src: string;
}

export default function Image({ src }: IProps) {
  return <SImage src={src} />;
}
