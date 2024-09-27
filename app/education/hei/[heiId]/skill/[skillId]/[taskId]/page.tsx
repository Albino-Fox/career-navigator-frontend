import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const TaskPage = () => {
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col items-center w-[100%] px-[145px] ">
        <div className="small-text pt-5">
          Frontend-developer ★☆☆ от [Университет имени Ливенталя]
        </div>
        <div className="big-text">
          3. Яда-яда-яда-яда-яда-яда-яда-яда-яда-яда-яда
        </div>
        <div className="leading-snug pt-[40px]">
          <div className="pb-[40px]">Описание</div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            <p>В решении приложите ссылку на результат.</p>
          </div>
          <div className="mt-[40px]">
            <div className="small-text">Поле для ввода ответа</div>
            <Textarea className="h-[400px] bg-c2 text-black normal-text py-3 px-5 leading-snug"></Textarea>
          </div>
          <div className="flex w-[100%] justify-center">
            <Button
              variant="outline"
              className="border-c1 text-c1 mt-5 w-[352px]"
            >
              Отправить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
