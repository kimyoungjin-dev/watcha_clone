import { RiKakaoTalkFill } from "react-icons/ri";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillApple,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import Input from "../Components/Auth/Input";
import Form from "../Components/Auth/Form";
import SubmitBtn from "../Components/Auth/SubmitBtn";
import AuthLayout from "../Components/Auth/AuthLayout";
import {
  ForgotPassword,
  IconBox,
  LoginHeader,
  OtherLogin,
  Separator,
} from "../Components/Auth/Login/Remainder";

export default function Login() {
  return (
    <AuthLayout>
      <LoginHeader>
        <span>로그인</span>
        <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
      </LoginHeader>
      <Form>
        <Input type="text" placeholder="이메일(example@gmail.com)" />
        <Input type="password" placeholder="비밀번호" />
        <SubmitBtn type="submit">로그인</SubmitBtn>
      </Form>

      <Separator>
        <div></div>
      </Separator>

      <OtherLogin>
        <span>다른 방법으로 로그인하기</span>
      </OtherLogin>
      <IconBox>
        <RiKakaoTalkFill color="yellow" />
        <AiFillGoogleCircle color="white" />
        <FaFacebook color="blue" />
        <AiFillTwitterCircle color="blue" />
        <AiFillApple color="white" />
        <FontAwesomeIcon icon={faLine} color="rgb(0,200,18)" />
      </IconBox>
    </AuthLayout>
  );
}
