interface Props {
  children: any;
}

export const Panel = (props: Props) => {
  return (
    <div className="flex w-full bg-panel-green rounded-tr-3xl rounded-bl-3xl p-6 lg:p-10">
      {props.children}
    </div>
  );
};
