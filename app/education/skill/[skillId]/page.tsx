import CardUniversityMoreList from "../../_components/cardUniversityMoreList";

const UniversityPage = () => {
  const difficultyTasks = [
    {
      difficulty: 1,
      tasks: [
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
      ],
    },
    {
      difficulty: 2,
      tasks: [
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
        {
          title: "Яда-яда",
          description: "a",
        },
      ],
    },
  ];
  return (
    <div className="flex justify-center w-[100%] pb-[75px] bg-c5 ">
      <div className="flex flex-col gap-[10px] items-center w-[100%] px-[145px] ">
        <div className="big-text py-5">
          Навык [Frontend Developer] от [Университет имени Ливенталя]
        </div>
        <div className="flex justify-center flex-col w-[1366px] rounded-[10px] text-black bg-c1 p-[40px] pt-0 ">
          {difficultyTasks.map((difficultyTasksPart, idx) => (
            <CardUniversityMoreList
              key={idx}
              linkType
              difficulty={difficultyTasksPart.difficulty}
              tasks={difficultyTasksPart.tasks}
            ></CardUniversityMoreList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UniversityPage;
