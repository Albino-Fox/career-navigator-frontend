import { Button } from "@/components/ui/button";
import CardApplication from "../_components/cardApplication";
import ListCardWork from "../_components/listCardWork";

const ApplicationsPage = () => {
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">Заявки</div>
        <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black p-[40px] py-0 gap-5">
          <div className="bg-c1 rounded-[10px]">
            <ListCardWork
              title="Сайт для продажи одежды"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{
                difficulty: 2,
                title: "Frontend Developer",
              }}
            ></ListCardWork>
            <CardApplication
              name="John doe"
              email="example@gmail.com"
              phone="+7XXXXXXXXX"
              skills={[
                { difficulty: 2, university: "Университет имени Лавентина" },
              ]}
            >
              <Button>Принять</Button>
              <Button variant="destructive">Отклонить</Button>
            </CardApplication>
          </div>
          <div className="bg-c1 rounded-[10px]">
            <ListCardWork
              title="Сайт для продажи одежды"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{
                difficulty: 2,
                title: "Frontend Developer",
              }}
            ></ListCardWork>
            <CardApplication
              name="John doe"
              email="example@gmail.com"
              phone="+7XXXXXXXXX"
              skills={[
                { difficulty: 2, university: "Университет имени Лавентина" },
              ]}
            >
              <Button>Принять</Button>
              <Button variant="destructive">Отклонить</Button>
            </CardApplication>
          </div>
          <div className="bg-c1 rounded-[10px]">
            <ListCardWork
              title="Сайт для продажи одежды"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              skill={{
                difficulty: 2,
                title: "Frontend Developer",
              }}
            ></ListCardWork>
            <CardApplication
              name="John doe"
              email="example@gmail.com"
              phone="+7XXXXXXXXX"
              skills={[
                { difficulty: 2, university: "Университет имени Лавентина" },
              ]}
            >
              <Button>Принять</Button>
              <Button variant="destructive">Отклонить</Button>
            </CardApplication>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
