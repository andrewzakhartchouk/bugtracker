import { CommentType } from "utils";

interface Props {
  comment: CommentType;
}

export const Comment = (props: Props) => {
  console.log(props.comment);

  return (
    <div className="flex flex-column text-white text-xs lg:text-sm">
      <div className="flex flex-row basis-28 lg:basis-32">
        <div className="hidden whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2 lg:block"></div>
        <span className="my-auto">{props.comment.user.name}</span>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex px-1">{props.comment.comment}</div>
        <div className="flex text-xs my-auto text-gray-400 whitespace-nowrap">
          {props.comment.created_at}
        </div>
      </div>
    </div>
  );
};
