import { ChatAltIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";

export const Task = () => {
  return (
    <div className="flex flex-row gap-1 text-xs items-center px-3 py-1 bg-gray-200 rounded-bl-2xl rounded-tr-2xl my-1">
      <div className="block p-1.5 whitespace-nowrap rounded-full rounded-tl-none bg-main-red"></div>
      <span>2d</span>
      <div className="rounded-bl-xl rounded-tr-xl bg-blue-500 px-2 py-1 text-white">
        In Progress
      </div>
      <div className="text-gray-700 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="flex items-end flex-grow"></div>
      <p className="font-bold text-xs">3</p>
      <div className="flex">
        <ChatAltIcon className="h-5 w-5 text-gray-700"></ChatAltIcon>
        <CheckCircleIcon className="ml-2 h-5 w-5 cursor-pointer text-gray-700 hover:text-main-green"></CheckCircleIcon>
      </div>
    </div>
  );
};
