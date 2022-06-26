interface Props {
  children: any;
  title: string;
}

export const FormField = (props: Props) => {
  return (
    <div className="flex flex-col w-full">
      <div className=" text-gray-400 font-medium">{props.title}</div>
      <div className="flex flex-row">
        <div className="border-2 border-gray-400 rounded-tr-xl rounded-bl-xl px-2 py-0.5 lg:px-4 lg:py-2 w-full">
          {props.children}
        </div>
      </div>
    </div>
  );
};
