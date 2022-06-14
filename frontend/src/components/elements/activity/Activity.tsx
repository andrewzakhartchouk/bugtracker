import { Bar } from "components";
import { Time, Design, ActivityType } from "utils";

export const Activity = (activity: ActivityType) => {
  return (
    <Bar>
      <div
        style={Design.setColor(`${activity.project.color}`)}
        className="flex my-auto text-xs mr-2 basis-28 overflow-hidden font-bold"
      >
        {activity.project.name}
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div className="my-auto font-medium text-gray-700">
          {activity.message}
        </div>
      </div>
      <div className="flex items-end flex-grow"></div>
      <div className="flex my-auto whitespace-nowrap text-gray-400">
        {Time.timeLeft(activity.created_at, true)}
      </div>
    </Bar>
  );
};
