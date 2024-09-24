import Form from "../../../components/form";
import TextareaField from "../../../components/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactPage = () => {
  return (
    <div className="flex justify-center w-[100%]">
      <Form
        title="Составление обращения"
        btnTitle="Отправить"
        className="w-[856px] pb-[100px] pt-[50px]"
      >
        <div className="pb-[30px]">
          <div className="small-text">Причина обращения</div>
          <Select defaultValue="technical">
            <SelectTrigger className="h-[60px] bg-c2/25 small-text m-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Технические проблемы</SelectItem>
              <SelectItem value="university">Зарегистрировать ВУЗ</SelectItem>
              <SelectItem value="employer">
                Зарегистрировать работодателя
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TextareaField
          title="Сообщение"
          placeholder="Введите текст сообщения"
          className="min-h-[250px]"
        />
      </Form>
    </div>
  );
};

export default ContactPage;
