import { PlusIcon } from "@heroicons/react/solid";
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
  const [selectedTask, setSelectedTask] = useState(null);
  const [editing, setEditing] = useState(false);

  async function fetchList() {
    setLoadingList(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = await fetch(listEndpoint);
    const body = await result.json();
    setTasks(body.tasks);
    setLoadingList(false);
    return body.tasks;
  }

  useEffect(() => {
    fetchList();
  }, []);

  const [sorting, setSorting] = useState("deadline");

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  async function handleTaskSelection(id: Key) {
    setLoadingTask(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let endpoint = taskEndpoint + id;
    const result = await fetch(endpoint);
    const body = await result.json();
    setSelectedTask(body.task);
    setLoadingTask(false);
  }

  function handleDelete() {
    setSelectedTask(null);
    fetchList();
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
              <div className="flex flex-row">
                <button
                  onClick={() => setEditing(true)}
                  className="flex gap-1 whitespace-nowrap px-5 py-0.5 bg-main-green text-white font-medium rounded-full hover:bg-low-green"
                >
                  <PlusIcon className="h-4 w-4 my-auto"></PlusIcon>
                  <span className="my-auto">Create task</span>
                </button>
                <SortBar sort={handleSortSwitch} selected={sorting}></SortBar>
              </div>
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
          {editing ? (
            <EditTask task={selectedTask} cancel={setEditing}></EditTask>
          ) : (
            <SelectedTask
              loading={loadingTask}
              task={selectedTask}
              edit={setEditing}
              delete={handleDelete}
            ></SelectedTask>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
