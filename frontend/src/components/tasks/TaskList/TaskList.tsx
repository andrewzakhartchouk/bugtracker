import { Task } from "components";
import { SortedCategory } from "utils";

interface Props {
  groups: Array<SortedCategory>;
  select: Function;
}

export const TaskList = (props: Props) => {
  return (
    <div className="flex flex-col no-scrollbar lg:overflow-y-scroll lg:relative h-full">
      <ul className="flex flex-col gap-4 lg:absolute w-full">
        {props.groups.map((group, index) => {
          return (
            group.data.length != 0 && (
              <li key={index}>
                <div className="text-gray-500 font-bold text-lg mb-1 md:text-xl lg:text-2xl">
                  {group.title}
                </div>
                <ul className="flex flex-col gap-1">
                  {group.data.map((task) => {
                    return (
                      <li key={task.id} onClick={() => props.select(task.id)}>
                        <Task {...task}></Task>
                      </li>
                    );
                  })}
                </ul>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
