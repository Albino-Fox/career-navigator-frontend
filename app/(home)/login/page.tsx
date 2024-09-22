import Form from "../_components/form";
import InputField from "../_components/input";

const Login = () => {
  return (
    <div className="w-[564px] self-center">
      <Form
        title="Регистрация"
        btnTitle="Зарегистрироваться"
        hasImportantFields
        className="pb-[200px]"
      >
        <InputField title="Почта" isImportant></InputField>
        <InputField title="Пароль" isImportant></InputField>
        <InputField title="Имя" isImportant></InputField>
        <InputField title="Фамилия"></InputField>
        <InputField title="Отчество"></InputField>
        <InputField title="Номер телефона" isImportant></InputField>
      </Form>
    </div>
  );
};

export default Login;
