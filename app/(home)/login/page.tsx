import { Button } from "@/components/ui/button";
import Form from "../../../components/form";
import InputField from "../../../components/input";

const LoginPage = () => {
  return (
    <div className="w-[564px] self-center">
      <Form
        title="Вход"
        method="POST"
        btnTitle="Войти"
        className="pb-[25px] pt-[50px]"
      >
        <InputField type="email" title="Почта" name="email"></InputField>
        <InputField type="password" title="Пароль" name="password"></InputField>
      </Form>
      <div className="text-center small-text pb-[100px]">
        Нет аккаунта?{" "}
        <Button variant="link" size="text" className="small-text">
          Зарегистрироваться
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
