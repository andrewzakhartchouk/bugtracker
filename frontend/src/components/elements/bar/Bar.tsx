interface Props {
  children: any;
  checked: boolean;
}

export const Bar = (props: Props) => {
  return (
    <div
      className={`flex flex-row gap-2 text-xs items-center px-3 py-1.5 rounded-bl-lg rounded-tr-lg cursor-pointer bg-gray-200 hover:bg-white ${
        props.checked && "opacity-50 hover:opacity-100"
      }`}
    >
      {props.children}
    </div>
  );
};
