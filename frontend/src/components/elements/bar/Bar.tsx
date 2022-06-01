interface Props {
  children: any;
}

export const Bar = (props: Props) => {
  return (
    <div className="flex flex-row gap-2 text-xs items-center px-3 py-1.5 bg-gray-200 rounded-bl-lg rounded-tr-lg cursor-pointer hover:bg-white">
      {props.children}
    </div>
  );
};
