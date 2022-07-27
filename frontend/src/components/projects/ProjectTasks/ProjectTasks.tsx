import {
  ChevronLeftIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { GreenScalingDots, Panel, SortBar, Task, TaskList } from "components";
import { useEffect, useState } from "react";
import { UserServices } from "services";
import { CompleteProject, TaskUtil } from "utils";

interface Props {
  project: CompleteProject | null;
  select: Function;
  showProject: Function;
  back: Function;
  addTask: Function;
}

export const ProjectTasks = (props: Props) => {
  const projectsEndpoint = process.env.NEXT_PUBLIC_API + "projects/";

  const [loading, setLoading] = useState(false);
  const [sorting, setSorting] = useState("deadline");
  const [tasks, setTasks] = useState([]);
  const userServices = UserServices();

  async function fetchProjectTasks() {
    setLoading(true);
    const tasks = await userServices.get(
      projectsEndpoint + `${props.project.id}/tasks/`
    );
    setTasks(tasks);
    setLoading(false);
    return tasks;
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

  if (tasks == null)
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
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row w-full justify-between gap-2">
          <div className="">
            {props.project != null && (
              <div className="flex flex-row gap-5">
                <div
                  className="flex gap-2 cursor-pointer text-gray-700 font-bold text-xl md:text-2xl lg:text-3xl hover:text-main-green"
                  onClick={() => props.showProject()}
                >
                  {props.project.name}
                  <InformationCircleIcon className="w-4 md:w-5 lg:w-6"></InformationCircleIcon>
                </div>
              </div>
            )}

            <span
              onClick={() => props.back()}
              className="flex my-auto text-gray-500 whitespace-nowrap font-light cursor-pointer text-xs lg:text-sm hover:text-gray-300"
            >
              <ChevronLeftIcon className="my-auto h-3"></ChevronLeftIcon>
              Return to project list
            </span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex my-auto justify-end">
              <button
                onClick={() => props.addTask()}
                className="flex gap-1 whitespace-nowrap px-5 py-0.5 bg-main-green text-white font-medium rounded-full hover:bg-low-green"
              >
                <PlusIcon className="h-4 w-4 my-auto"></PlusIcon>
                <span className="my-auto text-xs lg:text-base">Add task</span>
              </button>
            </div>
            <SortBar
              selected={sorting}
              sort={handleSortSwitch}
              projectTab={false}
            ></SortBar>
          </div>
        </div>
        <div className="flex flex-col flex-grow no-scrollbar lg:overflow-y-scroll lg:relative h-full">
          <TaskList groups={groupedTasks} select={props.select}></TaskList>
        </div>
      </div>
    </Panel>
  );
};
