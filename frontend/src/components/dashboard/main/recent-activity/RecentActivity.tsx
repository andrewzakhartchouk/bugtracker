import { Activity } from "components";
import { Key } from "react";

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

export const RecentActivity = () => {
  const activities: Array<Activity> = [
    {
      id: 1,
      project: { id: 1, name: "Government", color: "ff0000" },
      message: "Anthony Albanese sworn in as Prime Minister of Australia",
      created_at: "2022-05-23",
    },
    {
      id: 2,
      project: { id: 1, name: "Australia", color: "0000ff" },
      message: "Australian Federal Election",
      created_at: "2022-05-22",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full pb-3 font-bold text-2xl text-gray-700">
        Recent Activity
      </div>
      <div className="flex flex-col w-full gap-1 relative">
        <ul>
          {activities.map((activity, index) => {
            return (
              <li key={index}>
                <Activity {...activity}></Activity>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
