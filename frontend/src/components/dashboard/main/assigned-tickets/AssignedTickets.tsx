import { Task } from "components/task";
import { Key } from "react";
import { Priority } from "utils";

interface Task {
  id: Key;
  stage: Stage;
  priority: Priority;
  tags: string | null;
  end_date: string;
  description: string;
  comment_number: number;
}

interface Stage {
  name: string;
  color: string;
}

export const AssignedTickets = () => {
  const tasks: Array<Task> = [
    {
      id: 1,
      stage: { name: "Review", color: "22c55e" },
      priority: Priority.High,
      tags: "Tag1",
      end_date: "2022/04/30",
      description: "Make the backend",
      comment_number: 10,
    },
    {
      id: 2,
      stage: { name: "In Progress", color: "3b82f6" },
      priority: Priority.Medium,
      tags: "Tag2 Tag3",
      end_date: "2022/06/16",
      description: "Learn graphene, build the GraphQL API",
      comment_number: 3,
    },
    {
      id: 3,
      stage: { name: "Backlog", color: "ef4446" },
      priority: Priority.Low,
      tags: "Tag3",
      end_date: "2020/06/16",
      description:
        "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
      comment_number: 1,
    },
  ];

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="font-bold text-2xl text-gray-700">
        You have <span className="text-main-red">10</span> assigned tickets.
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 font-medium">Upcoming</span>
        <ul>
          {tasks.map((task, index) => {
            return (
              <li key={index}>
                <Task {...task}></Task>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
