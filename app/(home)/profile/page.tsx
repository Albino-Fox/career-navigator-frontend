import { Button } from "@/components/ui/button";
import Form from "../../../components/form";
import InputField from "../../../components/input";
import React from "react";
import { SessionIds } from "@/lib/config";
import { localizeRole } from "@/lib/utils";

export const fetchCache = "force-no-store";

const ProfilePage = async () => {
  // TODO: change user_id to cookie's one
  const data = await fetch(
    `http://127.0.0.1:3001/api/users/get/${SessionIds.student}`,
  );
  const user = await data.json();

  return (
    <div className="flex pd-default justify-around gap-[34px] pt-[25px]">
      <div className="flex flex-col flex-shrink-0 w-[45%]">
        <div className="flex flex-row gap-5 items-center">
          <Button
            size="fix"
            variant="icon"
            className="w-[150px] h-[150px] flex-shrink-0 font-extrabold text-[5rem] text-c5"
          >
            П
          </Button>
          <div className="flex flex-col">
            <div className="big-text">{user.name}</div>
            <div className="small-text">{user.email}</div>
          </div>
        </div>
        <div>Тип аккаунта: {localizeRole(user.Role.name)}</div>
      </div>
      <div className="flex flex-col basis-1/2 flex-shrink-0 max-w-[1200px]">
        <Form
          btnTitle="Сохранить изменения"
          method="PATCH"
          action={`http://127.0.0.1:3001/api/users/${SessionIds.student}/updateProfile`}
          btnFill
          className="pb-[100px]"
        >
          <div className="pb-[20px]">Данные профиля:</div>
          <InputField
            title={user.Role.name === "university" ? "Наименование" : "Имя"}
            name="name"
            isImportant
            value={user.name}
          />
          {!(user.Role.name === "university") ? (
            <>
              <InputField title="Фамилия" name="surname" value={user.surname} />
              <InputField
                title="Отчество"
                name="patronymic"
                value={user.patronymic}
              />
            </>
          ) : (
            ""
          )}
          {user.Role.name === "university" ? (
            <InputField
              title="Описание"
              name="description"
              value={user.description}
            />
          ) : (
            ""
          )}
          <InputField
            isDisabled
            title="Почта"
            name="email"
            value={user.email}
          />
          <InputField
            isDisabled
            title="Телефон"
            name="phone_number"
            value={user.phone_number}
          />
        </Form>
      </div>
    </div>
  );
};

export default ProfilePage;
