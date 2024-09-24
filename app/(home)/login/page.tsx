import { Button } from "@/components/ui/button";
import Form from "../../../components/form";
import InputField from "../../../components/input";

const LoginPage = () => {
  return (
    <div className="w-[564px] self-center">
      <Form title="Вход" btnTitle="Войти" className="pb-[25px] pt-[50px]">
        <InputField type="email" title="Почта"></InputField>
        <InputField type="password" title="Пароль"></InputField>
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
