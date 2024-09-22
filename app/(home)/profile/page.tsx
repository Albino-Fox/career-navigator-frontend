import { Button } from "@/components/ui/button";
import Form from "../_components/form";
import InputField from "../_components/input";

const ProfilePage = () => {
  return (
    <div className="flex pd-default justify-around gap-[34px] pt-[25px]">
      <div className="flex flex-col flex-shrink-0 w-[45%]">
        <div className="flex flex-row gap-5 items-center">
          <Button
            size="fix"
            variant="icon"
            className="w-[150px] h-[150px] flex-shrink-0"
          />
          <div className="flex flex-col">
            <div className="big-text">Really long name (tm)</div>
            <div className="small-text">example@gmail.com</div>
          </div>
        </div>
        <div>Тип аккаунта: Студент</div>
      </div>
      <div className="flex flex-col basis-1/2 flex-shrink-0 max-w-[1200px]">
        <Form btnTitle="Сохранить изменения" btnFill className="pb-[100px]">
          <div className="pb-[20px]">Данные профиля:</div>
          <InputField title="Имя" isImportant />
          <InputField title="Фамилия" />
          <InputField title="Отчество" />
          <InputField isDisabled title="Почта" />
          <InputField isDisabled title="Телефон" />
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
