import { PencilIcon, TrashIcon, UserAddIcon } from "@heroicons/react/solid";

interface Props {
  edit: Function;
  addUser: Function;
  delete: Function;
}

export const ProjectButtons = (props: Props) => {
  return (
    <div className="flex text-white gap-3 absolute top-2 right-2 lg:left-2 lg:top-auto lg:flex-col">
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
          onClick={() => props.addUser()}
          className="rounded-full bg-main-green p-2 cursor-pointer transition hover:bg-white hover:text-main-green"
        >
          <UserAddIcon className="h-6"></UserAddIcon>
        </div>
        <div className="absolute invisible whitespace-nowrap rounded-full text-xs text-black bg-white my-2.5 py-0.5 px-2 right-full transition-opacity opacity-0 group-hover:opacity-100 group-hover:visible">
          Add user
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
