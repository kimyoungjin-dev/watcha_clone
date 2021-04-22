import { useState } from "react";
import { FiCircle } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import styled from "styled-components";
import { data } from "./Data";
import { RiTodoFill } from "react-icons/ri";
import { checkDocument } from "@apollo/client/utilities";
import { couldStartTrivia } from "typescript";

const List = styled.div`
  color: ${(props) => props.theme.silverColor};
  font-size: 13px;
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Value = styled.span`
  color: ${(props) => props.theme.silverColor};
  margin-left: 3px;
`;

const CheckCircle = styled(BiCheckCircle)`
  color: ${(props) => props.theme.LogoColor};
`;

export default function CheckList() {
  const [list, setList] = useState(data);

  const soloClick = (id: number) => {
    setList(list.map((v) => (v.id === id ? { ...v, check: !v.check } : v)));
  };

  const allClick = () => {
    let allchecked = Boolean();
    setList(
      list.map((item, index) => {
        if (index === 0) {
          allchecked = item.check;
        }
        return { ...item, check: !allchecked };
      })
    );
  };

  return (
    <>
      {list.map((item, index) => {
        return (
          <List key={item.id}>
            <Item
              onClick={() => (index === 0 ? allClick() : soloClick(item.id))}
            >
              {item.check ? <CheckCircle /> : <FiCircle />}
              <Value>{item.title}</Value>
            </Item>
          </List>
        );
      })}
    </>
  );
}
