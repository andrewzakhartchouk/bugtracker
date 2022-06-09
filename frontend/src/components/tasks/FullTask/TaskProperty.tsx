interface Props {
  children: any;
  title: string;
}

export const TaskProperty = (props: Props) => {
  return (
    <div className="flex flex-col flex-grow gap-2">
      <div className="border-b-2 border-gray-400 text-gray-400 font-normal w-full">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};
