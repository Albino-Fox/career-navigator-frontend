import Form from "../_components/form";
import InputField from "../_components/input";
import TextareaField from "../_components/textarea";

const ContactPage = () => {
  return (
    <Form title="Составление обращения" btnTitle="Отправить">
      <InputField title="Причина обращения" />
      <TextareaField title="Сообщение" placeholder="Введите текст сообщения" />
    </Form>
  );
};

export default ContactPage;
