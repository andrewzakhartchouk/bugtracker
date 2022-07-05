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
import { NextPage } from "next";
import { Key, useEffect, useRef, useState } from "react";
import { UserServices } from "services";
import { SortedCategories, TaskUtil } from "utils";

const Tasks: NextPage = () => {
  const [editing, setEditing] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [loadingTask, setLoadingTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [sorting, setSorting] = useState("deadline");
  const [tasks, setTasks] = useState([]);
  const [groupedTasks, setGroupedTasks] = useState<any>([]);

  const taskRef = useRef(null);
  const userServices = UserServices();

  useEffect(() => {
    const fetchTaskList = async () => {
      setLoadingList(true);
      const tasks = await userServices.get(
        process.env.NEXT_PUBLIC_API + "tasks/"
      );
      console.log(tasks);
      setTasks(tasks);
      setLoadingList(false);
      return tasks;
    };
    fetchTaskList();
  }, []);

  useEffect(() => {
    if (tasks) {
      const result: SortedCategories = TaskUtil.sortTasks(sorting, tasks);
      setGroupedTasks(result);
    }
  }, [sorting, tasks]);

  function handleSortSwitch(sortBy: string) {
    setSorting(sortBy);
  }

  async function handleTaskSelection(id: Key) {
    taskRef.current.scrollIntoView();
    setEditing(false);
    setLoadingTask(true);
    let data = await userServices.get(
      process.env.NEXT_PUBLIC_API + `tasks/${id}/`
    );
    console.log("SELECTED", data);
    setSelectedTask(data);
    setLoadingTask(false);
  }

  async function handleDelete() {
    setSelectedTask(null);
    fetchTaskList();
  }

  function handleTaskCreate() {
    setSelectedTask(null);
    setEditing(true);
  }

  // let groupedTasks = TaskUtil.sortTasks(sorting, tasks);

  return (
    <>
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
                  onClick={() => handleTaskCreate()}
                  className="flex gap-1 whitespace-nowrap px-5 py-0.5 bg-main-green text-white font-medium rounded-full hover:bg-low-green"
                >
                  <PlusIcon className="h-4 w-4 my-auto"></PlusIcon>
                  <span className="my-auto text-xs lg:text-base">Add task</span>
                </button>
                <SortBar
                  sort={handleSortSwitch}
                  selected={sorting}
                  projectTab={true}
                ></SortBar>
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
    </>
  );
};

export default Tasks;
