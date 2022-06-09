import { Task } from "components";
import { ListTask } from "utils";

interface Props {
  groups: GroupedObject;
  select: Function;
}

interface GroupedObject {
  [key: string]: {
    title: string;
    data: Array<ListTask>;
  };
}

export const TaskList = (props: Props) => {
  return (
    <div className="flex flex-col no-scrollbar lg:overflow-y-scroll lg:relative h-full">
      <ul className="flex flex-col gap-4 lg:absolute w-full">
        {Object.keys(props.groups).map((group, index) => {
          return (
            props.groups[group].data.length != 0 && (
              <li key={index}>
                <div className="text-gray-500 font-bold text-lg mb-1 md:text-xl lg:text-2xl">
                  {props.groups[group].title}
                </div>
                <ul className="flex flex-col gap-1">
                  {props.groups[group].data.map((task) => {
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
