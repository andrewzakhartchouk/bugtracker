interface Props {
  children: any;
}

export const Selected = (props: Props) => {
  return (
    <div className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
      {props.children}
    </div>
  );
};
