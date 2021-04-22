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

interface IForm {
  email: string;
  password: string;
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    mode: "onChange",
  });

  const onValid = (data: IForm) => console.log(data);

  return (
    <>
      <Image src="https://cdn.dribbble.com/users/730703/screenshots/13387806/media/1306ce92b7fc2cf5832b8ebe106c5a21.jpg?compress=1&resize=1600x1200" />
      <Header text="회원가입" link={path.signUp} />
      <AuthLayout>
        <LoginHeader>
          <span>로그인</span>
          <ForgotPassword>비밀번호를 잊어버리셨나요?</ForgotPassword>
        </LoginHeader>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("email", {
              required: true,
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
              required: true,
              minLength: {
                value: 10,
                message: "비밀번호는 10글자 이상이어야 합니다.",
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
    </>
  );
}
