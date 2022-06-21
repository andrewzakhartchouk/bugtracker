import { User } from "utils";

interface Props {
  team: Array<User>;
}

export const Team = (props: Props) => {
  return (
    <ul className="flex flex-col gap-0.5 overflow-y-scroll no-scrollbar">
      {props.team.map((user, index) => {
        return (
          <div className="flex gap-2" key={index}>
            <span className="my-auto text-gray-700 text-sm">{user.name}</span>
            {user.lead && (
              <span className="text-main-green text-xs my-auto font-bold">
                <p className="hidden md:block lg:hidden xl:block">LEAD</p>
                <p className="block md:hidden lg:block xl:hidden">L</p>
              </span>
            )}
          </div>
        );
      })}
    </ul>
  );
};
