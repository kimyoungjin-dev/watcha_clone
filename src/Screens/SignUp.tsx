import Input from "../Components/Auth/Input";
import Form from "../Components/Auth/Form";
import SubmitBtn from "../Components/Auth/SubmitBtn";
import { LoginHeader } from "../Components/Auth/Login/Remainder";
import { path } from "../Components/Routes";
import Header from "../Components/Auth/Header";
import CheckList from "../Components/Auth/SignUp/CheckList";
import { useForm } from "react-hook-form";
import ErrorMessage from "../Components/Auth/ErrorMessage";
import AuthLayout from "../Components/Auth/AuthLayout";
import Image from "../Components/Auth/Image";
import { Payment } from "../Components/Auth/SignUp/Remainder";

interface IForm {
  userName: string;
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

  const onValid = (data: IForm) => {
    console.log(data);
  };

  return (
    <>
      <Image src="https://cdn.dribbble.com/users/4597873/screenshots/15118299/media/86f17667edbf10a2560a6eef2e60c454.png?compress=1&resize=1600x1200" />
      <Header link={path.home} text="로그인" />
      <AuthLayout>
        <LoginHeader>
          <span>로그인</span>
        </LoginHeader>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            id="firstInput"
            {...register("userName", {
              required: true,
              minLength: {
                value: 2,
                message: "아이디는 2글자이상 이어야합니다.",
              },
            })}
            type="text"
            placeholder="이름(2자 이상)"
          />

          <Input
            type="email"
            placeholder="이메일(example@gmail.com)"
            {...register("email", {
              required: true,
              validate: (currentValue) => currentValue.includes("@"),
              minLength: {
                value: 2,
                message: "이메일에는 @가 포함되어야합니다.",
              },
            })}
          />
          <Input
            id="lastInput"
            type="password"
            placeholder="영문, 숫자 특문 중 2개 조합 10자 이상"
            {...register("password", {
              required: true,
              minLength: {
                value: 10,
                message: "패스워드는 10글자이상 이어야 합니다.",
              },
            })}
          />

          <ErrorMessage text={errors?.userName?.message} />
          <ErrorMessage text={errors?.email?.message} />
          <ErrorMessage text={errors?.password?.message} />
        </Form>
        <CheckList />
        <SubmitBtn type="submit" disabled={!isValid}>
          계정 생성하기
        </SubmitBtn>
        <Payment>결제 정보요? 충분히 둘러보시고 입력해도 늦지 않아요</Payment>
      </AuthLayout>
    </>
  );
}
