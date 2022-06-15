import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { MouseEventHandler } from "react";

interface Props {
  confirm: MouseEventHandler<HTMLDivElement>;
  cancel: MouseEventHandler<HTMLDivElement>;
}

export const FormButtons = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 absolute left-2 text-white">
      <div
        className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green"
        onClick={props.confirm}
      >
        <CheckIcon className="h-6"></CheckIcon>
      </div>
      <div
        className="rounded-full bg-main-red p-2 cursor-pointer transition hover:bg-white hover:text-main-red"
        onClick={props.cancel}
      >
        <XIcon className="h-6"></XIcon>
      </div>
    </div>
  );
};
