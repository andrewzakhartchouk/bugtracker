import {
  ChevronDoubleRightIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { Panel, Stages, Task, Team } from "components";
import { ListTask, ProjectOverview } from "utils";

interface Props {
  projects: Array<ProjectOverview>;
  handleTask: Function;
  handleProject: Function;
}

export const ProjectList = (props: Props) => {
  return (
    <>
      {props.projects.map((project) => {
        return (
          <div className="flex flex-col" key={project.id}>
            <div className="flex flex-col">
              <Panel>
                <div className="flex flex-col cols-2 gap-2 w-full">
                  <div
                    onClick={() => props.handleProject(project.id)}
                    className="flex gap-5 text-gray-700 font-bold text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-main-green"
                  >
                    {project.name}
                    <ChevronDoubleRightIcon className="w-6 md:w-7 lg:w-8"></ChevronDoubleRightIcon>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-1 basis-1/5">
                      <span className="text-gray-500 text-sm md:text-base font-medium">
                        Team
                      </span>
                      <div className="h-20 max-h-20 overflow-y-scroll no-scrollbar">
                        <Team team={project.team}></Team>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 basis-2/6">
                      <span className="text-gray-500 text-sm md:text-base font-medium">
                        Stages
                      </span>
                      <div className="h-20 max-h-20 overflow-y-scroll no-scrollbar">
                        <Stages stages={project.stages}></Stages>
                      </div>
                    </div>
                    <div className="flex flex-grow justify-end">
                      <div className="flex flex-col gap-2 text-white">
                        <div className="flex group relative">
                          <div className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green">
                            <InformationCircleIcon className="h-5"></InformationCircleIcon>
                          </div>
                          <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-10 transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
                            Details
                          </div>
                        </div>
                        <div className="flex group relative justify-end">
                          <div className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green">
                            <PlusIcon className="h-5"></PlusIcon>
                          </div>
                          <div className="absolute whitespace-nowrap invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-10 transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
                            Add task
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col h-28 max-h-28 gap-1 w-full">
                    <span className="text-gray-500 text-sm md:text-base font-medium">
                      My tasks
                    </span>
                    <ul className="flex flex-col w-full overflow-y-scroll no-scrollbar gap-1">
                      {project.tasks.map((task: ListTask) => {
                        return (
                          <li
                            key={task.id}
                            onClick={() => props.handleTask(task.id)}
                          >
                            <Task {...task}></Task>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        );
      })}
    </>
  );
};
