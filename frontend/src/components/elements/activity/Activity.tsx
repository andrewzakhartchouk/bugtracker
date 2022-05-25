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
      <div className="flex w-full justify-between font-medium">
        <div className="flex w-full">
          <div
            style={Design.setColor(`${activity.project.color}`)}
            className="flex my-auto text-sm mr-2 basis-28 overflow-hidden font-bold"
          >
            {activity.project.name}
          </div>
          <div className="flex my-auto basis-auto text-gray-700">
            {activity.message}
          </div>
        </div>
        <div className="flex my-auto whitespace-nowrap text-gray-400">
          {Time.timeLeft(activity.created_at, true)}
        </div>
      </div>
    </Bar>
  );
};
