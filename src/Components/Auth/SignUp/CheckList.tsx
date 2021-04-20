import { useState } from "react";
import { FiCircle } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import styled from "styled-components";

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
  const [list, setList] = useState([
    { title: "만 14세 이상입니다", id: 1, check: false },
    {
      title: "왓챠피디아 서비스 이용약관에 동의합니다 (필수)",
      id: 2,
      check: false,
    },
    { title: "왓챠 서비스 이용약관에 동의합니다 (필수)", id: 3, check: false },
    {
      title: "개인정보 수집 및 이용에 대한 안내에 동의합니다 (필수)",
      id: 4,
      check: false,
    },
    {
      title: "신작 알림 이벤트 정보 수신에 동의합니다 (선택)",
      id: 5,
      check: false,
    },
  ]);

  const toggleCheck = (id: number) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };

  return (
    <>
      {list.map((v) => (
        <List key={v.id}>
          <Item onClick={() => toggleCheck(v.id)}>
            {v.check ? <CheckCircle size="15" /> : <FiCircle size="15" />}
            <Value>{v.title}</Value>
          </Item>
        </List>
      ))}
    </>
  );
}
