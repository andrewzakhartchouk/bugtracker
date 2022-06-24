import { GreenScalingDots, Panel, SortBar, Task } from "components";
import { useEffect, useState } from "react";
import { CompleteProject, TaskUtil } from "utils";

interface Props {
  project: CompleteProject | null;
  select: Function;
}

export const ProjectTasks = (props: Props) => {
  const projectTasksEndpoint = "api/tasks/list";

  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState("deadline");
  const [tasks, setTasks] = useState([]);

  async function fetchProjectTasks() {
    setLoading(true);
    const result = await fetch(projectTasksEndpoint);
    const body = await result.json();
    setTasks(body.tasks);
    setLoading(false);
    return body.tasks;
  }

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  useEffect(() => {
    fetchProjectTasks();
  }, []);

  let groupedTasks = TaskUtil.sortTasks(sorting, tasks);

  if (loading)
    return (
      <Panel>
        <GreenScalingDots></GreenScalingDots>
      </Panel>
    );

  if (tasks != null)
    return (
      <Panel>
        <div className="flex flex-col flex-grow h-full gap-3">
          <div className="text-gray-700 text-3xl font-bold">
            {props.project != null && props.project.name}
          </div>
          <div className="flex flex-col text-center text-gray-500 font-bold text-lg mb-1 md:text-xl lg:text-xl">
            No tasks
          </div>
        </div>
      </Panel>
    );

  return (
    <Panel>
      <div className="flex flex-col flex-grow gap-3">
        <div className="flex flex-row">
          <div className="text-gray-700 text-3xl font-bold">
            {props.project != null && props.project.name}
          </div>
          <SortBar selected={sorting} sort={handleSortSwitch}></SortBar>
        </div>
        <div className="flex flex-col flex-grow no-scrollbar lg:overflow-y-scroll lg:relative h-full">
          <ul className="flex flex-col gap-4 lg:absolute w-full">
            {Object.keys(groupedTasks).map((group, index) => {
              return (
                groupedTasks[group].data.length != 0 && (
                  <li key={index}>
                    <div className="text-gray-500 font-bold text-lg mb-1 md:text-xl lg:text-xl">
                      {groupedTasks[group].title}
                    </div>
                    <ul className="flex flex-col gap-1">
                      {groupedTasks[group].data.map((task) => {
                        return (
                          <li
                            key={task.id}
                            onClick={() => props.select(task.id)}
                          >
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
      </div>
    </Panel>
  );
};
