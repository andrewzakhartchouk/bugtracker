import { Design, Stage } from "utils";

interface Props {
  stages: Array<Stage>;
}

export const Stages = (props: Props) => {
  return (
    <ul className="flex flex-col gap-1 w-full overflow-y-scroll no-scrollbar">
      {props.stages.map((stage) => {
        return (
          <div className="flex gap-2 text-sm" key={stage.id}>
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
  );
};
