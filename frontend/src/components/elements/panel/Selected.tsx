import { ChevronLeftIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { TaskProperty, Comment } from "components";
import { Key } from "react";
import { Design, Priority } from "utils";

interface Props {
  task: Task | null;
  loading: boolean;
}

interface Task {
  id: Key;
  name: string;
  priority: number;
  tags: Array<string>;
  start_date: string;
  end_date: string;
  project: Project;
  stage: Stage;
  assigned: Array<User>;
  description: string;
  submitted_by: User;
  comments: Array<CommentType>;
}

interface User {
  name: string;
  image: string;
}

interface CommentType {
  id: number;
  comment: string;
  submitted_by: User;
  created_at: string;
}

interface Project {
  id: Key;
  name: string;
}

interface Stage {
  id: Key;
  name: string;
}

export const Selected = (props: Props) => {
  if (props.loading)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex my-auto">
          <div className="orbit h-10 w-10"></div>
        </div>
      </div>
    );

  if (props.task == null)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex my-auto">
          <ChevronUpIcon className="block lg:hidden w-8 h-8"></ChevronUpIcon>
          <ChevronLeftIcon className="hidden lg:block w-8 h-8"></ChevronLeftIcon>
          <span className="text-2xl font-bold">Select a task to view</span>
        </div>
      </div>
    );
  else {
    return (
      <div className="flex w-full justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col w-full flex-grow gap-5 overflow-hidden">
          <div className="flex flex-row">
            <TaskProperty title={"Task"}>
              <div className="text-2xl max-h-8 overflow-y-scroll no-scrollbar font-bold text-panel-green">
                {props.task.name}
              </div>
            </TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <TaskProperty title={"Priority"}>
              <div
                className={`flex justify-center px-3 py-0.5 whitespace-nowrap rounded-full rounded-tl-none ${
                  props.task.priority == Priority.High
                    ? "bg-main-red"
                    : props.task.priority == Priority.Medium
                    ? "bg-amber-500"
                    : "bg-main-green"
                }`}
              >
                <span className="text-white text-sm">
                  {props.task.priority == Priority.High
                    ? "High"
                    : props.task.priority == Priority.Medium
                    ? "Medium"
                    : "Low"}
                </span>
              </div>
            </TaskProperty>
            <TaskProperty title={"Tags"}>
              <div className="flex gap-1 flex-wrap text-sm max-h-7 overflow-y-scroll no-scrollbar">
                {props.task.tags.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-white border border-white px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </TaskProperty>
            <TaskProperty title={"Schedule"}>
              <div className="flex whitespace-nowrap text-white justify-start">
                {props.task.start_date} - {props.task.end_date}
              </div>
            </TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <TaskProperty title={"Project"}>
              <div className="flex text-white font-medium justify-start">
                {props.task.project.name}
              </div>
            </TaskProperty>
            <TaskProperty title={"Stage"}>
              <div
                style={Design.setBackground("2563eb")}
                className="rounded-bl-lg whitespace-nowrap rounded-tr-lg px-2 py-0.5 font-medium text-center text-white hidden md:block"
              >
                {props.task.stage.name}
              </div>
            </TaskProperty>
            <TaskProperty title={"Assigned"}>
              <ul className="flex flex-col gap-1 max-h-16 overflow-y-scroll no-scrollbar">
                {props.task.assigned.map((user, index) => {
                  return (
                    <li key={index} className="flex">
                      <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
                      <div className="text-white w-28 overflow-x-scroll no-scrollbar">
                        {user.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex w-full">
              <TaskProperty title={"Description"}>
                <div className="flex text-white text-sm overflow-y-scroll no-scrollbar max-h-32 h-32">
                  {props.task.description}
                </div>
              </TaskProperty>
            </div>
            <div className="flex w-full">
              <TaskProperty title={"Attachments"}>
                <div className="flex flex-wrap gap-2 overflow-y-scroll no-scrollbar max-h-32 h-32">
                  <div className="block square bg-red-500 w-20 h-20"></div>
                  <div className="block square bg-blue-500 w-20 h-20"></div>
                  <div className="block square bg-green-500 w-20 h-20"></div>
                  <div className="block square bg-amber-500 w-20 h-20"></div>
                </div>
              </TaskProperty>
            </div>
          </div>
          <div className="flex flex-row">
            <TaskProperty title={"Comments"}>
              <ul className="flex flex-col gap-3 overflow-y-scroll no-scrollbar max-h-40">
                {props.task.comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <Comment comment={comment}></Comment>
                    </li>
                  );
                })}
              </ul>
            </TaskProperty>
          </div>
        </div>
      </div>
    );
  }
};
