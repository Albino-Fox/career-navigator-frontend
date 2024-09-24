import { Button } from "@/components/ui/button";
import Form from "../../../components/form";
import InputField from "../../../components/input";

const RegistrationPage = () => {
  return (
    <div className="w-[564px] self-center">
      <Form
        title="Регистрация"
        btnTitle="Зарегистрироваться"
        hasImportantFields
        className="pb-[25px] pt-[50px]"
      >
        <InputField type="email" title="Почта" isImportant></InputField>
        <InputField type="password" title="Пароль" isImportant></InputField>
        <InputField
          type="password"
          title="Повторите пароль"
          isImportant
        ></InputField>
        <InputField title="Имя" isImportant></InputField>
        <InputField title="Фамилия"></InputField>
        <InputField title="Отчество"></InputField>
        {/* TODO: Maybe add phone validation*/}
        <InputField title="Номер телефона" isImportant></InputField>
      </Form>
      <div className="text-center small-text pb-[100px]">
        Есть аккаунт?{" "}
        <Button variant="link" size="text" className="small-text">
          Войти
        </Button>
      </div>
    </div>
  );
};

export default RegistrationPage;
