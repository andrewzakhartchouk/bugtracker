import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { Design, ProjectOverview } from "utils";

export const Project = (props: ProjectOverview) => {
  return (
    <div className="flex flex-col w-full sm:h-44 sm:max-h-44 group-hover:cursor-pointer">
      <div className="flex justify-between font-bold text-lg md:text-xl lg:text-2xl cursor-pointer text-gray-700 sm:pb-3 hover:text-main-green">
        {props.projectName}
        <ChevronDoubleRightIcon className="w-6 md:w-7 lg:w-8"></ChevronDoubleRightIcon>
      </div>
      <div className="hidden flex-row w-full gap-2 overflow-hidden sm:flex">
        <div className="flex basis-2/5 flex-col">
          <div className="text-gray-500 font-medium">Team</div>
          <ul className="flex flex-col gap-0.5 overflow-y-scroll no-scrollbar">
            {props.team.map((user, index) => {
              return (
                <div className="flex gap-2" key={index}>
                  <span className="my-auto text-gray-700 text-sm">
                    {user.name}
                  </span>
                  {user.lead && (
                    <span className="text-main-green text-xs my-auto font-bold">
                      <p className="hidden md:block lg:hidden xl:block">LEAD</p>
                      <p className="block md:hidden lg:block xl:hidden">L</p>
                    </span>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex basis-3/5 flex-col w-full overflow-hidden">
          <div className="text-gray-500 font-medium">Stages</div>
          <ul className="flex flex-col gap-1 w-full overflow-y-scroll no-scrollbar">
            {props.stages.map((stage, index) => {
              return (
                <div className="flex gap-2 text-sm" key={index}>
                  <div
                    style={Design.setBackground(stage.color)}
                    className="flex w-full justify-between my-auto text-white gap-5 px-2 py-1 rounded-bl-lg rounded-tr-lg whitespace-nowrap"
                  >
                    <span>{stage.name}</span>
                    <span className="">{stage.count}</span>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
