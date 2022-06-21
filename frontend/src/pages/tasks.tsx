import { PlusIcon } from "@heroicons/react/solid";
import {
  TaskForm,
  GreenScalingDots,
  Navbar,
  Panel,
  SelectedTask,
  SortBar,
  TaskList,
} from "components";
import { Key, useEffect, useRef, useState } from "react";
import { TaskUtil } from "utils";

const Tasks = () => {
  const listEndpoint = "/api/tasks/list";
  const taskEndpoint = "/api/tasks/";

  const [tasks, setTasks] = useState([]);
  const [loadingTask, setLoadingTask] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editing, setEditing] = useState(false);

  const taskRef = useRef(null);

  async function fetchTaskList() {
    setLoadingList(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const result = await fetch(listEndpoint);
    const body = await result.json();
    setTasks(body.tasks);
    setLoadingList(false);
    return body.tasks;
  }

  useEffect(() => {
    fetchTaskList();
  }, []);

  const [sorting, setSorting] = useState("deadline");

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  async function handleTaskSelection(id: Key) {
    taskRef.current.scrollIntoView();
    setLoadingTask(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let endpoint = taskEndpoint + id;
    const result = await fetch(endpoint);
    const body = await result.json();
    setSelectedTask(body.task);
    setLoadingTask(false);
  }

  async function handleDelete() {
    setSelectedTask(null);
    fetchTaskList();
  }

  let groupedTasks = TaskUtil.sortTasks(sorting, tasks);

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
      <Navbar></Navbar>
      <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow gap-2 p-8 lg:py-16 lg:px-20">
        <div className="flex lg:hidden pb-1 text-panel-green text-3xl font-medium">
          My tasks
        </div>
        <div className="flex relative">
          <div className="hidden w-1 -rotate-90 absolute justify-end -top-4 -left-6 text-panel-green text-3xl whitespace-nowrap font-medium lg:flex">
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
                  <span className="my-auto text-xs lg:text-base">Add task</span>
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
        <div ref={taskRef} className="flex">
          {editing ? (
            <TaskForm task={selectedTask} cancel={setEditing}></TaskForm>
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
