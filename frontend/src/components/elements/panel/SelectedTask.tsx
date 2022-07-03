import { ChevronLeftIcon, ChevronUpIcon } from "@heroicons/react/solid";
import {
  PanelProperty,
  Comment,
  GreenScalingDots,
  TaskButtons,
} from "components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Design, Priority, CompleteTask } from "utils";

interface Props {
  task: CompleteTask | null;
  loading: boolean;
  edit: Function;
  delete: Function;
}

export const SelectedTask = (props: Props) => {
  const commentsEndpoint = "/api/comments";

  const [commenting, setCommenting] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const validation = {
    comment: {
      required: "Please input a comment before sending.",
      minLength: { value: 8, message: "A minimum of 8 characters is required" },
      maxLength: {
        value: 100,
        message: "A maximum of 100 characters is required",
      },
    },
  };

  async function handleComment(data: any) {
    const res = await fetch(commentsEndpoint, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
  }

  function handleCommentState() {
    setCommenting(!commenting);
  }

  function handleAttachmentUpload() {
    console.log("Handle attachment");
  }

  if (props.loading)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <GreenScalingDots></GreenScalingDots>
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
      <>
        <div className="flex w-full justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
          <div className="flex flex-col w-full flex-grow gap-5 overflow-hidden">
            <div className="flex flex-row">
              <PanelProperty title={"Task"}>
                <div className="text-base max-h-8 overflow-y-scroll no-scrollbar font-bold text-panel-green lg:text-2xl">
                  {props.task.name}
                </div>
              </PanelProperty>
            </div>
            <div className="flex flex-row gap-3">
              <PanelProperty title={"Priority"}>
                <div
                  className={`flex justify-center px-3 py-0.5 whitespace-nowrap rounded-full rounded-tl-none ${
                    props.task.priority == Priority.High
                      ? "bg-main-red"
                      : props.task.priority == Priority.Medium
                      ? "bg-amber-400"
                      : props.task.priority == Priority.Low
                      ? "bg-main-green"
                      : "bg-transparent"
                  }`}
                >
                  <span className="text-white text-xs lg:text-sm">
                    {props.task.priority == Priority.High
                      ? "High"
                      : props.task.priority == Priority.Medium
                      ? "Medium"
                      : "Low"}
                  </span>
                </div>
              </PanelProperty>
              <PanelProperty title={"Tags"}>
                <div className="flex gap-1 flex-wrap max-h-7 overflow-y-scroll no-scrollbar">
                  {props.task.tags?.split(" ").map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="text-white border border-white px-2 py-0.5 rounded-full text-xs lg:text-sm"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </PanelProperty>
              <PanelProperty title={"Schedule"}>
                <div className="flex whitespace-nowrap text-white justify-start text-xs font-medium lg:text-base">
                  {Date.parse(props.task.start_at)} -{" "}
                  {Date.parse(props.task.end_at)}
                </div>
              </PanelProperty>
            </div>
            <div className="flex flex-row gap-3">
              <PanelProperty title={"Project"}>
                <div className="flex text-white font-medium justify-start text-xs lg:text-base">
                  {props.task.project.name}
                </div>
              </PanelProperty>
              <PanelProperty title={"Stage"}>
                <div
                  style={Design.setBackground("2563eb")}
                  className="rounded-bl-lg whitespace-nowrap rounded-tr-lg px-2 py-0.5 font-medium text-center text-white text-xs lg:text-base"
                >
                  {props.task.stage.name}
                </div>
              </PanelProperty>
              <PanelProperty title={"Assigned"}>
                <li className="flex">
                  <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
                  <div className="text-white w-28 overflow-x-scroll no-scrollbar my-auto text-xs lg:text-base">
                    {props.task.assigned.name}
                  </div>
                </li>
              </PanelProperty>
            </div>
            <div className="flex flex-row gap-3">
              <div className="flex w-full">
                <PanelProperty title={"Description"}>
                  <div className="flex text-white overflow-y-scroll no-scrollbar max-h-32 h-32 text-sm lg:text-base">
                    {props.task.description}
                  </div>
                </PanelProperty>
              </div>
              <div className="flex w-full basis-1/3">
                <PanelProperty title={"Attachments"}>
                  <div className="flex flex-wrap gap-2 overflow-y-scroll no-scrollbar max-h-32 h-32">
                    <div className="block square bg-red-500 w-20 h-20"></div>
                    <div className="block square bg-blue-500 w-20 h-20"></div>
                    <div className="block square bg-green-500 w-20 h-20"></div>
                    <div className="block square bg-amber-500 w-20 h-20"></div>
                  </div>
                </PanelProperty>
              </div>
            </div>
            <div className="flex flex-row">
              <PanelProperty title={"Comments"}>
                <ul className="flex flex-col gap-3 overflow-y-scroll no-scrollbar max-h-40">
                  {props.task.comments.map((comment) => {
                    return (
                      <div key={comment.id} className="flex flex-col gap-3">
                        <li>
                          <Comment comment={comment}></Comment>
                        </li>
                        <div className="border-b border-gray-600"></div>
                      </div>
                    );
                  })}
                </ul>
              </PanelProperty>
            </div>
            {commenting && (
              <div>
                <form className="bottom-0 flex flex-row gap-2 w-full">
                  <input
                    type="text"
                    autoFocus
                    {...register("comment", validation.comment)}
                    className="w-full px-5 outline-none rounded-bl-2xl rounded-tr-2xl"
                  />
                  <button
                    onClick={handleSubmit(handleComment)}
                    className="px-4 py-0.5 flex bg-panel-green rounded-full hover:bg-main-green hover:text-white"
                  >
                    <span>Send</span>
                  </button>
                </form>
                <small className="absolute text-main-red">
                  {errors?.comment && errors.comment.message}
                </small>
              </div>
            )}
          </div>
        </div>

        <div className="flex h-full items-center relative">
          <TaskButtons
            edit={props.edit}
            comment={handleCommentState}
            delete={props.delete}
            attachment={handleAttachmentUpload}
          ></TaskButtons>
        </div>
      </>
    );
  }
};
