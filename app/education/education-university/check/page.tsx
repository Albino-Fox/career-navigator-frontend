import CardTaskAnswer from "../../_components/cardTaskAnswer";

const CheckPage = () => {
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">Проверка заданий</div>
        <div className="flex flex-col w-[1278px] justify-between items-center rounded-[10px] text-black gap-[20px]">
          <CardTaskAnswer
            skill={{ difficulty: 2, title: "Frontend Developer" }}
            task={{
              title: "Сделать инициализацию проекта на своём компьютере",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }}
            answer=":3"
          ></CardTaskAnswer>
          <CardTaskAnswer
            skill={{ difficulty: 2, title: "Frontend Developer" }}
            task={{
              title: "Сделать инициализацию проекта на своём компьютере",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }}
            answer=":3"
          ></CardTaskAnswer>
          <CardTaskAnswer
            skill={{ difficulty: 2, title: "Frontend Developer" }}
            task={{
              title: "Сделать инициализацию проекта на своём компьютере",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            }}
            answer=":3"
          ></CardTaskAnswer>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
