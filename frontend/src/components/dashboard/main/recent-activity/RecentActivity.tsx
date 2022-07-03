import { Activity } from "components";
import { ActivityType } from "utils";

interface Props {
  activity: Array<ActivityType>;
}

export const RecentActivity = (props: Props) => {
  return (
    <div className="w-full">
      <div className="w-full pb-3 font-bold text-lg md:text-xl lg:text-2xl text-gray-700">
        Recent Activity
      </div>
      <div className="flex flex-col w-full relative h-36 max-h-36">
        <ul className="flex flex-col gap-1.5 overflow-y-scroll no-scrollbar">
          {!props.activity ? (
            <div className="flex flex-col w-full text-center justify-self-center text-gray-500">
              No activity
            </div>
          ) : (
            props.activity.map((activity, index) => {
              return (
                <li key={index}>
                  <Activity {...activity}></Activity>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};
