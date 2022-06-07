import { Task } from "components";
import { ListTask } from "utils";

interface Props {
  groups: GroupedObject;
}

interface GroupedObject {
  [key: string]: {
    title: string;
    data: Array<ListTask>;
  };
}

export const TaskList = (props: Props) => {
  return (
    <>
      <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-4">
        {Object.keys(props.groups).map((group, index) => {
          return (
            props.groups[group].data.length != 0 && (
              <li key={index}>
                <div className="text-gray-500 font-bold text-lg mb-1 md:text-xl lg:text-2xl">
                  {props.groups[group].title}
                </div>
                <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-1">
                  {props.groups[group].data.map((task) => {
                    return (
                      <li key={task.id}>
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
    </>
  );
};
