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
import {
  ForgotPassword,
  IconBox,
  LoginHeader,
  OtherLogin,
  Separator,
} from "../Components/Auth/Login/Remainder";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Components/Auth/ErrorMessage";
import AuthLayout from "../Components/Auth/AuthLayout";
import Header from "../Components/Auth/Header";
import { path } from "../Components/Routes";
import Image from "../Components/Auth/Image";
import { useReactiveVar } from "@apollo/client";
import { darkVar, darkChange, lightChange } from "../Components/apollo";
import { BsSun, BsMoon } from "react-icons/bs";
import styled from "styled-components";

interface IForm {
  email: string;
  password: string;
}

const DarkModeBox = styled.div`
  cursor: pointer;
`;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
  });

  const onValid = (data: IForm) => console.log(data);
  const darkmode = useReactiveVar(darkVar);
  console.log(darkmode);
  return (
    <>
      <Header text="회원가입" link={path.signUp} />
      <AuthLayout>
        <LoginHeader>
          <span>로그인</span>
          <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
        </LoginHeader>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("email", {
              required: "아이디 및 이메일은 필수 입력 조건입니다.",
              validate: (currentValue) => currentValue.includes("@"),
            })}
            type="email"
            placeholder="이메일(example@gmail.com)"
            id="firstInput"
          />

          <Input
            id="lastInput"
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호는 필수 입력 조건입니다.",
              minLength: {
                value: 5,
                message: "비밀번호는 최소 5글자 이상이어야 합니다.",
              },

              maxLength: {
                value: 15,
                message: "비밀번호는 최대 15글자 미만이어야 합니다.",
              },
            })}
          />

          <ErrorMessage text={errors?.email?.message} />
          <ErrorMessage text={errors?.password?.message} />
          <SubmitBtn type="submit" disabled={!isValid}>
            로그인
          </SubmitBtn>
        </Form>

        <Separator>
          <div></div>
        </Separator>

        <OtherLogin>
          <span>다른 방법으로 로그인하기</span>
          <DarkModeBox onClick={darkmode ? lightChange : darkChange}>
            <span>{darkmode ? "화이트모드" : "다크모드"}</span>
            <span> {darkmode ? <BsSun /> : <BsMoon />}</span>
          </DarkModeBox>
        </OtherLogin>
        <IconBox>
          <RiKakaoTalkFill color="yellow" />
          <AiFillGoogleCircle />
          <FaFacebook color="blue" />
          <AiFillTwitterCircle color="blue" />
          <AiFillApple />
          <FontAwesomeIcon icon={faLine} color="rgb(0,200,18)" />
        </IconBox>
      </AuthLayout>
    </>
  );
}
