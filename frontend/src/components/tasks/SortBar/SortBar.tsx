interface Props {
  sort: Function;
  selected: string;
}

export const SortBar = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 justify-end text-main-green w-full">
      <div
        onClick={() => props.sort("deadline")}
        className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-5 py-1 cursor-pointer ${
          props.selected == "deadline"
            ? "text-white bg-main-green hover:border-main-green"
            : "font-bold underline-offset-2 hover:underline"
        }`}
      >
        Deadline
      </div>
      <div
        onClick={() => props.sort("priority")}
        className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-5 py-1 cursor-pointer ${
          props.selected == "priority"
            ? "text-white bg-main-green hover:border-main-green"
            : "font-bold underline-offset-2 hover:underline"
        }`}
      >
        Priority
      </div>
      <div
        onClick={() => props.sort("project")}
        className={`my-auto font-medium rounded-tr-xl rounded-bl-xl px-5 py-1 cursor-pointer ${
          props.selected == "project"
            ? "text-white bg-main-green hover:border-main-green"
            : "font-bold underline-offset-2 hover:underline"
        }`}
      >
        Project
      </div>
    </div>
  );
};
