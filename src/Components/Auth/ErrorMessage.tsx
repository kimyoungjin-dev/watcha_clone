import styled from "styled-components";

interface IProps {
  text?: string;
}

const Text = styled.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`;

export default function ErrorMessage({ text }: IProps) {
  return <Text>{text}</Text>;
}
