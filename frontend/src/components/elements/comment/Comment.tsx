interface Props {
  comment: Comment;
}

interface Comment {
  id: number;
  comment: string;
  submitted_by: User;
  created_at: string;
}

interface User {
  name: string;
  image: string;
}

export const Comment = (props: Props) => {
  return (
    <div className="flex flex-column text-white text-sm">
      <div className="flex flex-row basis-32">
        <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
        <span className="my-auto">{props.comment.submitted_by.name}</span>
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
