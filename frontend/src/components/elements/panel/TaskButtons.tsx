import {
  PencilIcon,
  ChatIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/solid";

interface Props {
  edit: Function;
  comment: Function;
  delete: Function;
  attachment: Function;
}

export const TaskButtons = (props: Props) => {
  return (
    <div className="flex flex-col gap-3 absolute left-2 text-white">
      <div className="flex group">
        <div
          onClick={() => props.edit(true)}
          className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green"
        >
          <PencilIcon className="h-6"></PencilIcon>
        </div>
        <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Edit
        </div>
      </div>
      <div className="flex group">
        <div
          onClick={() => props.attachment()}
          className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green"
        >
          <PlusIcon className="h-6"></PlusIcon>
        </div>
        <div className="absolute invisible whitespace-nowrap rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Add image attachment
        </div>
      </div>
      <div className="flex group">
        <div
          onClick={() => props.comment(true)}
          className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green"
        >
          <ChatIcon className="h-6"></ChatIcon>
        </div>
        <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Comment
        </div>
      </div>
      <div className="flex group">
        <div
          onClick={() => props.delete()}
          className="rounded-full bg-main-red p-2 cursor-pointer transition hover:bg-white hover:text-main-red"
        >
          <TrashIcon className="h-6"></TrashIcon>
        </div>
        <div className="absolute invisible rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Delete
        </div>
      </div>
    </div>
  );
};
