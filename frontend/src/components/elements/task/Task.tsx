import { ChatIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { Priority, Time, Design, ListTask } from "utils";
import { Bar } from "components";
import { UserServices } from "services";

export const Task = (props: ListTask) => {
  const tasksEndpoint = process.env.NEXT_PUBLIC_API + `tasks/${props.id}/`;

  const userServices = UserServices();

  async function checkTask() {
    const formData = { checked: true };
    try {
      const result = await userServices.patch(
        tasksEndpoint + "update/",
        formData
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Bar>
      <div
        className={`block p-1.5 whitespace-nowrap rounded-full rounded-tl-none ${
          props.priority == Priority.High
            ? "bg-main-red"
            : props.priority == Priority.Medium
            ? "bg-amber-400"
            : props.priority == Priority.Low
            ? "bg-main-green"
            : "bg-transparent"
        }`}
      ></div>
      <span>{Time.timeLeft(props.end_at)}</span>
      <div
        style={Design.setBackground(props.stage.color)}
        className="rounded-bl-lg whitespace-nowrap rounded-tr-lg px-2 py-0.5 text-white hidden md:block"
      >
        {props.stage.name}
      </div>
      <div className="flex gap-1">
        {props.tags?.split(" ").map((tag, index) => {
          return (
            <span
              key={index}
              className="text-gray-400 border border-gray-400 px-1 py-0.5 rounded-full"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="text-gray-700 font-medium">{props.name}</div>
      </div>
      <div className="flex items-end flex-grow"></div>
      <div className="flex gap-0.5 justify-center">
        <div className="flex group cursor-pointer">
          <p className="my-auto font-bold text-xs">{props.comment_count}</p>
          <ChatIcon className="h-5 w-5 text-gray-700"></ChatIcon>
        </div>
        <CheckCircleIcon
          onClick={() => checkTask()}
          className="h-5 w-5 cursor-pointer text-gray-700 hidden md:block  hover:text-main-green"
        ></CheckCircleIcon>
      </div>
    </Bar>
  );
};
