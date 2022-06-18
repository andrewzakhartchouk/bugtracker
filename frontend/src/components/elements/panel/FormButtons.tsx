import { CheckIcon, XIcon } from "@heroicons/react/solid";

interface Props {
  confirm: Function;
  cancel: Function;
}

export const FormButtons = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 absolute left-2 text-white">
      <div className="flex group">
        <button
          className="relative rounded-full bg-main-green p-2 cursor-pointer transition outline-none hover:bg-white hover:text-main-green"
          onClick={() => props.confirm()}
        >
          <CheckIcon className="h-6"></CheckIcon>
        </button>
        <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Confirm
        </div>
      </div>
      <div className="flex group">
        <button
          className="relative rounded-full bg-main-red p-2 cursor-pointer transition outline-none hover:bg-white hover:text-main-red"
          onClick={() => props.cancel(false)}
        >
          <XIcon className="h-6"></XIcon>
        </button>
        <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Cancel
        </div>
      </div>
    </div>
  );
};
