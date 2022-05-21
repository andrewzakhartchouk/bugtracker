import { ChatAltIcon } from "@heroicons/react/solid";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { Priority } from "utils";
import { Key } from "react";
import * as Time from "utils";

interface Stage {
  name: string;
  color: string;
}

interface Task {
  id: Key;
  stage: Stage;
  priority: Priority;
  tags: string | null;
  end_date: string;
  description: string;
  comment_number: number;
}

function setBackground(color: string): { backgroundColor: string } {
  return { backgroundColor: `#${color}` };
}

export const Task = (props: Task) => {
  return (
    <div className="flex flex-row gap-2 text-xs items-center px-3 py-1.5 bg-gray-200 rounded-bl-lg rounded-tr-lg my-1 cursor-pointer hover:bg-white">
      <div
        className={`block p-1.5 whitespace-nowrap rounded-full rounded-tl-none ${
          props.priority == Priority.High
            ? "bg-main-red"
            : props.priority == Priority.Medium
            ? "bg-yellow-500"
            : "bg-main-green"
        }`}
      ></div>
      <span>{Time.timeLeft(props.end_date)}</span>
      <div
        style={setBackground(props.stage.color)}
        className="rounded-bl-lg whitespace-nowrap rounded-tr-lg px-2 py-0.5 text-white"
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
        <div className="text-gray-700 font-medium">{props.description}</div>
      </div>
      <div className="flex items-end flex-grow"></div>
      <div className="flex justify-center">
        <p className="my-auto font-bold text-xs">{props.comment_number}</p>
        <ChatAltIcon className="h-5 w-5 text-gray-700"></ChatAltIcon>
        <CheckCircleIcon className="ml-2 h-5 w-5 cursor-pointer text-gray-700 hover:text-main-green"></CheckCircleIcon>
      </div>
    </div>
  );
};
