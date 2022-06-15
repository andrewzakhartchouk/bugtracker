import { PencilIcon, ChatAltIcon, TrashIcon } from "@heroicons/react/solid";

export const TaskButtons = () => {
  return (
    <div className="flex flex-col gap-3 absolute left-2 text-white">
      <div className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green">
        <PencilIcon className="h-6"></PencilIcon>
      </div>
      <div className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green">
        <ChatAltIcon className="h-6"></ChatAltIcon>
      </div>
      <div className="rounded-full bg-main-red p-2 cursor-pointer transition hover:bg-white hover:text-main-red">
        <TrashIcon className="h-6"></TrashIcon>
      </div>
    </div>
  );
};
