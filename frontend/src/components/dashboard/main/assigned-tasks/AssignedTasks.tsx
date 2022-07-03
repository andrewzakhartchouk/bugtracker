import { Task } from "components";
import { ListTask } from "utils";

interface Props {
  tasks: Array<ListTask>;
}

export const AssignedTickets = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700">
        You have{" "}
        <span className="text-main-red">{props.tasks?.length ?? 0}</span>{" "}
        assigned tasks.
      </div>
      <div className="flex flex-col h-56 max-h-56 gap-1">
        <span className="text-gray-500 text-sm md:text-base font-medium">
          Upcoming
        </span>
        <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-1">
          {!props.tasks ? (
            <div className="flex flex-col w-full text-center justify-self-center text-gray-500">
              No tasks
            </div>
          ) : (
            props.tasks.map((task) => {
              return (
                <li key={task.id}>
                  <Task {...task}></Task>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
