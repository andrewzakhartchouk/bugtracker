import { Navbar, Panel, Selected, SortBar, TaskList } from "components";
import { useEffect, useState } from "react";
import { sortTasks } from "utils/helpers/tasks";

const Tasks = () => {
  const endpoint = "/api/tasks/list";

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(endpoint);
      const body = await result.json();
      setTasks(body.tasks);
      console.log("CALLING USE EFFECT");
      return body.tasks;
    };
    fetchData();
  }, []);

  const [sorting, setSorting] = useState("deadline");

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  let groupedTasks = sortTasks(sorting, tasks);

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar lg:overflow-hidden">
      <Navbar></Navbar>
      <div className="flex flex-grow flex-col lg:flex-row gap-2 p-8 lg:py-16 lg:px-20">
        <div className="flex lg:hidden text-panel-green text-3xl font-medium">
          My tasks
        </div>
        <div className="flex relative w-full">
          <div className="hidden lg:block lg:-rotate-90 lg:absolute lg:-left-20 lg:top-10 text-panel-green text-3xl font-medium">
            My tasks
          </div>
          <Panel>
            <div className="flex flex-col w-full gap-5">
              <SortBar sort={handleSortSwitch} selected={sorting}></SortBar>
              {groupedTasks != null && (
                <TaskList groups={groupedTasks}></TaskList>
              )}
            </div>
          </Panel>
        </div>
        <div className="flex w-full">
          <Selected></Selected>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
