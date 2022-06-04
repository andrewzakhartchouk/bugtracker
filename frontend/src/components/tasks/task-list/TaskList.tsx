import { Task } from "components";
import { ListTask } from "utils";

interface Props {
  tasks: Array<ListTask>;
}

export const TaskList = (props: Props) => {
  return (
    <>
      <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-1">
        {props.tasks.map((task, index) => {
          return (
            <li key={index}>
              <Task {...task}></Task>
            </li>
          );
        })}
      </ul>
    </>
  );
};
