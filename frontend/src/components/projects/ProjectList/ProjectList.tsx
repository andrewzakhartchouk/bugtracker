import { InformationCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { Panel, Stages, Task, Members, AddProject } from "components";
import { ListTask, ProjectBlock } from "utils";

interface Props {
  projects: Array<ProjectBlock>;
  selectTask: Function;
  selectProject: Function;
  editProject: Function;
}

export const ProjectList = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-5">
      {props.projects.map((project) => {
        return (
          <div className="flex flex-col" key={project.id}>
            <div className="flex flex-col">
              <Panel>
                <div className="flex flex-col gap-2 w-full">
                  <div
                    onClick={() => props.selectProject(project.id)}
                    className="flex gap-3 text-gray-700 font-bold text-lg md:text-xl lg:text-2xl cursor-pointer hover:text-main-green"
                  >
                    {project.name}
                    <InformationCircleIcon className="w-4 md:w-5 lg:w-6"></InformationCircleIcon>
                  </div>
                  <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-1">
                      <span className="text-gray-500 text-sm md:text-base font-medium">
                        Team
                      </span>
                      <div className="h-36 max-h-36 overflow-y-scroll no-scrollbar">
                        <Members members={project.members}></Members>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-gray-500 text-sm md:text-base font-medium">
                        Stages
                      </span>
                      <div className="h-36 max-h-36 overflow-y-scroll no-scrollbar">
                        <Stages
                          stages={project.stages.sort((a, b) =>
                            a.order > b.order ? 1 : -1
                          )}
                        ></Stages>
                      </div>
                    </div>

                    <div className="flex flex-col w-full relative">
                      <div className="flex flex-col gap-1 w-full absolute">
                        <div className="flex flex-row justify-between">
                          <span className="text-gray-500 text-sm md:text-base font-medium">
                            My tasks
                          </span>
                        </div>
                        <ul className="flex flex-col overflow-y-scroll no-scrollbar gap-1 w-full">
                          {project.tasks.map((task: ListTask) => {
                            return (
                              <li
                                key={task.id}
                                onClick={() => props.selectTask(task.id)}
                              >
                                <Task {...task}></Task>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Panel>
            </div>
          </div>
        );
      })}
      <AddProject add={() => props.editProject(true)}></AddProject>
    </div>
  );
};
