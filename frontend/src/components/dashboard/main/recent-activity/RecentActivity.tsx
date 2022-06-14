import { Activity } from "components";
import { ActivityType } from "utils";

export const RecentActivity = () => {
  const activities: Array<ActivityType> = [
    {
      id: 1,
      project: { id: 1, name: "Government", color: "ff0000" },
      message: "Anthony Albanese sworn in as Prime Minister of Australia",
      created_at: "2022-06-03",
    },
    {
      id: 2,
      project: { id: 1, name: "Australia", color: "0000ff" },
      message: "Australian Federal Election",
      created_at: "2022-05-22",
    },
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
      <div className="w-full pb-3 font-bold text-lg md:text-xl lg:text-2xl text-gray-700">
        Recent Activity
      </div>
      <div className="flex flex-col w-full relative h-36 max-h-36">
        <ul className="flex flex-col gap-1.5 overflow-y-scroll no-scrollbar">
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
