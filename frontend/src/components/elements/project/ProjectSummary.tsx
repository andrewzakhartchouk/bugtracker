import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { Team, Stages } from "components";
import { Design, ProjectOverview } from "utils";

export const ProjectSummary = (props: ProjectOverview) => {
  return (
    <div className="flex flex-col w-full sm:h-44 sm:max-h-44 group-hover:cursor-pointer">
      <div className="flex justify-between font-bold text-lg md:text-xl lg:text-2xl cursor-pointer text-gray-700 sm:pb-3 hover:text-main-green">
        {props.projectName}
        <ChevronDoubleRightIcon className="w-6 md:w-7 lg:w-8"></ChevronDoubleRightIcon>
      </div>
      <div className="hidden flex-row w-full gap-2 overflow-hidden sm:flex">
        <div className="flex basis-2/5 flex-col">
          <div className="text-gray-500 font-medium">Team</div>
          <Team team={props.team}></Team>
        </div>
        <div className="flex basis-3/5 flex-col w-full overflow-hidden">
          <div className="text-gray-500 font-medium">Stages</div>
          <Stages stages={props.stages}></Stages>
        </div>
      </div>
    </div>
  );
};
