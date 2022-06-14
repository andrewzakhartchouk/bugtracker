import {
  EditTask,
  GreenScalingDots,
  Navbar,
  Panel,
  SelectedTask,
  SortBar,
  TaskList,
} from "components";
import { Key, useEffect, useState } from "react";
import { TaskUtil } from "utils";

const Tasks = () => {
  const listEndpoint = "/api/tasks/list";
  const taskEndpoint = "/api/tasks/";

  const [tasks, setTasks] = useState([]);
  const [loadingTask, setLoadingTask] = useState(false);
  const [loadingList, setLoadingList] = useState(false);

  useEffect(() => {
    const fetchList = async () => {
      setLoadingList(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const result = await fetch(listEndpoint);
      const body = await result.json();
      setTasks(body.tasks);
      setLoadingList(false);
      return body.tasks;
    };
    fetchList();
  }, []);

  const [sorting, setSorting] = useState("deadline");

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  const [selectedTask, setSelectedTask] = useState(null);

  async function handleTaskSelection(id: Key) {
    setLoadingTask(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let endpoint = taskEndpoint + id;
    const result = await fetch(endpoint);
    const body = await result.json();
    setSelectedTask(body.task);
    setLoadingTask(false);
  }

  let groupedTasks = TaskUtil.sortTasks(sorting, tasks);

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
      <Navbar></Navbar>
      <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow gap-2 p-8 lg:py-16 lg:px-20">
        <div className="flex lg:hidden text-panel-green text-3xl font-medium">
          My tasks
        </div>
        <div className="flex relative">
          <div className="hidden lg:block lg:-rotate-90 lg:absolute lg:-left-20 lg:top-10 text-panel-green text-3xl font-medium">
            My tasks
          </div>
          <Panel>
            <div className="flex flex-col w-full gap-3">
              <SortBar sort={handleSortSwitch} selected={sorting}></SortBar>
              {loadingList ? (
                <GreenScalingDots></GreenScalingDots>
              ) : (
                groupedTasks != null && (
                  <TaskList
                    groups={groupedTasks}
                    select={handleTaskSelection}
                  ></TaskList>
                )
              )}
            </div>
          </Panel>
        </div>
        <div className="flex">
          {/* <SelectedTask
            loading={loadingTask}
            task={selectedTask}
          ></SelectedTask> */}
          <EditTask></EditTask>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
