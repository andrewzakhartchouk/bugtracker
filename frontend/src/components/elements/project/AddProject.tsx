import { PlusIcon } from "@heroicons/react/solid";

export const AddProject = () => {
  return (
    <div className="w-full group flex justify-center border-8 border-panel-green rounded-tr-3xl rounded-bl-3xl cursor-pointer hover:border-main-green">
      <PlusIcon className="my-auto h-16 w-16 text-white group-hover:text-main-green"></PlusIcon>
    </div>
  );
};
