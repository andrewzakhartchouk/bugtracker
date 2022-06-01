import { Design } from "utils";

interface Project {
  projectName: string;
  team: Array<User>;
  stages: Array<Stage>;
}

interface User {
  name: string;
  image: string;
  lead: boolean;
}

interface Stage {
  name: string;
  count: number;
  color: string;
}

export const Project = (props: Project) => {
  return (
    <div className="flex flex-col w-full h-44 max-h-44">
      <div className="font-bold text-2xl text-gray-700 pb-3">
        {props.projectName}
      </div>
      <div className="flex flex-row w-full gap-2 overflow-hidden">
        <div className="flex basis-1/2 flex-col">
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
                      LEAD
                    </span>
                  )}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="flex basis-1/2 flex-col w-full">
          <div className="text-gray-500 font-medium">Stages</div>
          <ul className="flex flex-col gap-1 w-full overflow-y-scroll no-scrollbar">
            {props.stages.map((stage, index) => {
              return (
                <div className="flex gap-2 text-sm" key={index}>
                  <div
                    style={Design.setBackground(stage.color)}
                    className="flex w-full justify-between my-auto text-white px-2 py-1 rounded-bl-lg rounded-tr-lg"
                  >
                    <span>{stage.name}</span>
                    <span className="mx-2">{stage.count}</span>
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
