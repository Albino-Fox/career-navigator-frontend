import Form from "../_components/form";
import InputField from "../_components/input";

const Login = () => {
  return (
    <div className="w-[564px] self-center">
      <Form
        title="Регистрация"
        btnTitle="Зарегистрироваться"
        hasImportantFields
        className="pb-[100px] pt-[50px]"
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
    </div>
  );
};

export default Login;
