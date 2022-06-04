import { Bar } from "components";
import { Key } from "react";
import { Time, Design } from "utils";

interface Activity {
  id: Key;
  project: Project;
  message: string;
  created_at: string;
}

interface Project {
  id: Key;
  name: string;
  color: string;
}

export const Activity = (activity: Activity) => {
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
