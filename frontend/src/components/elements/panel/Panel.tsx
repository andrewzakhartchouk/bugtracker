interface Props {
  children: any;
}

export const Panel = (props: Props) => {
  return (
    <div className="flex w-full bg-panel-green p-10 rounded-tr-3xl rounded-bl-3xl">
      {props.children}
    </div>
  );
};
