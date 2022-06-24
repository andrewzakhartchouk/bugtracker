import { PlusIcon } from "@heroicons/react/solid";

interface Props {
  add: Function;
}

export const AddProject = (props: Props) => {
  return (
    <div
      onClick={() => props.add()}
      className="w-full group flex justify-center border-8 border-panel-green rounded-tr-3xl rounded-bl-3xl cursor-pointer hover:border-main-green"
    >
      <PlusIcon className="my-auto h-16 w-16 text-panel-green group-hover:text-main-green"></PlusIcon>
    </div>
  );
};
