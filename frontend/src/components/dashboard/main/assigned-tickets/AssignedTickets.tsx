import { Task } from "components";
import { ListTask, Priority } from "utils";

export const AssignedTickets = () => {
  const tasks: Array<ListTask> = [
    {
      id: 1,
      stage: { name: "Review", color: "22f55e" },
      priority: Priority.High,
      tags: "Tag1",
      end_date: "2022/05/21",
      description: "Make the backend",
      comment_number: 10,
    },
    {
      id: 2,
      stage: { name: "In Progress", color: "3bf2f6" },
      priority: Priority.Medium,
      tags: "Tag2 Tag3",
      end_date: "2022/05/22",
      description: "Learn graphene, build the GraphQL API",
      comment_number: 3,
    },
    {
      id: 3,
      stage: { name: "Backlog", color: "ef44ee" },
      priority: Priority.Low,
      tags: "Tag3",
      end_date: "2022/05/20",
      description:
        "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
      comment_number: 1,
    },
    {
      id: 4,
      stage: { name: "Review", color: "22f55e" },
      priority: Priority.High,
      tags: "Tag1",
      end_date: "2022/05/21",
      description: "Make the backend",
      comment_number: 10,
    },
    {
      id: 5,
      stage: { name: "In Progress", color: "3bf2f6" },
      priority: Priority.Medium,
      tags: "Tag2 Tag3",
      end_date: "2022/05/22",
      description: "Learn graphene, build the GraphQL API",
      comment_number: 3,
    },
    {
      id: 6,
      stage: { name: "Backlog", color: "ef44ee" },
      priority: Priority.Low,
      tags: "Tag3",
      end_date: "2022/05/20",
      description:
        "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
      comment_number: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700">
        You have <span className="text-main-red">10</span> assigned tickets.
      </div>
      <div className="flex flex-col h-56 max-h-56 gap-1">
        <span className="text-gray-500 text-sm md:text-base font-medium">
          Upcoming
        </span>
        <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-1">
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <Task {...task}></Task>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
