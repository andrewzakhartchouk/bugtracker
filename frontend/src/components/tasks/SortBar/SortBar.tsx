interface Props {
  sort: Function;
  selected: string;
  projectTab: boolean;
}

export const SortBar = (props: Props) => {
  return (
    <div className="flex flex-row gap-0.5 justify-end text-main-green text-xs w-full lg:gap-1 lg:text-sm">
      <div
        onClick={() => props.sort("deadline")}
        className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-2 py-1 cursor-pointer lg:px-3 lg:py-0.5 ${
          props.selected == "deadline"
            ? "text-white bg-main-green hover:border-main-green"
            : "font-bold underline-offset-2 hover:underline"
        }`}
      >
        Deadline
      </div>
      <div
        onClick={() => props.sort("priority")}
        className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-2 py-1 cursor-pointer lg:px-3 lg:py-0.5 ${
          props.selected == "priority"
            ? "text-white bg-main-green hover:border-main-green"
            : "font-bold underline-offset-2 hover:underline"
        }`}
      >
        Priority
      </div>
      {props.projectTab ? (
        <div
          onClick={() => props.sort("project")}
          className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-2 py-1 cursor-pointer lg:px-3 lg:py-0.5 ${
            props.selected == "project"
              ? "text-white bg-main-green hover:border-main-green"
              : "font-bold underline-offset-2 hover:underline"
          }`}
        >
          Project
        </div>
      ) : (
        <div
          onClick={() => props.sort("stage")}
          className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-2 py-1 cursor-pointer lg:px-3 lg:py-0.5 ${
            props.selected == "stage"
              ? "text-white bg-main-green hover:border-main-green"
              : "font-bold underline-offset-2 hover:underline"
          }`}
        >
          Stage
        </div>
      )}
    </div>
  );
};
