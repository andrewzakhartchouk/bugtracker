interface Props {
  children: any;
}

export const Tile = (props: Props) => {
  return (
    <div className="flex w-full bg-panel-green p-7 rounded-tr-3xl rounded-bl-3xl">
      {props.children}
    </div>
  );
};
