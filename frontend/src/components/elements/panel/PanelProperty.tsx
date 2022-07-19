interface Props {
  children: any;
  title: string;
}

export const PanelProperty = (props: Props) => {
  return (
    <div className="flex flex-col flex-grow gap-3">
      <div className="border-b-2 border-gray-400 text-gray-400 font-normal w-full text-xs">
        {props.title}
      </div>
      {props.children}
    </div>
  );
};
