import { Task } from "components/task";

export const AssignedTickets = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-2xl text-gray-700">
        You have <span className="text-main-red">10</span> assigned tickets.
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 font-medium">Upcoming</span>
        <ul>
          <li>
            <Task></Task>
          </li>
          <li>
            <Task></Task>
          </li>
          <li>
            <Task></Task>
          </li>
        </ul>
      </div>
    </div>
  );
};
