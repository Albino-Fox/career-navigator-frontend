import { Button } from "@/components/ui/button";
import Form from "../../../components/form";
import InputField from "../../../components/input";

const RegistrationPage = () => {
  return (
    <div className="w-[564px] self-center">
      <Form
        title="Регистрация"
        btnTitle="Зарегистрироваться"
        method="POST"
        action="http://127.0.0.1:3001/api/users/create"
        hasImportantFields
        className="pb-[25px] pt-[50px]"
      >
        <InputField
          type="email"
          title="Почта"
          name="email"
          isImportant
        ></InputField>
        <InputField
          type="password"
          title="Пароль"
          name="password"
          isImportant
        ></InputField>
        <InputField title="Имя" name="name" isImportant></InputField>
        <InputField title="Фамилия" name="surname"></InputField>
        <InputField title="Отчество" name="patronymic"></InputField>
        <InputField
          title="Номер телефона"
          name="phone_number"
          isImportant
        ></InputField>
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
