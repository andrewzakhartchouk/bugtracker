import { ChevronDoubleRightIcon, PlusIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";
import {
  GreenScalingDots,
  Navbar,
  Panel,
  Task,
  Team,
  Stages,
  SelectedTask,
  TaskForm,
  ProjectList,
  ProjectForm,
  SelectedProject,
} from "components";
import { Key, useEffect, useRef, useState } from "react";
import { ListTask } from "utils";

const Projects = () => {
  const projectsEndpoint = "/api/projects/";
  const taskEndpoint = "/api/tasks/";

  const [editingTask, setEditingTask] = useState(false);
  const [editingProject, setEditingProject] = useState(false);
  const [loadingList, setLoadingList] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [viewTask, setViewTask] = useState(false);
  const [loadingTask, setLoadingTask] = useState(false);
  const [loadingProject, setLoadingProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTask, setShowTask] = useState(false);
  const [showProject, setShowProject] = useState(false);

  const taskRef = useRef(null);

  async function fetchProjectList() {
    setLoadingList(true);
    const result = await fetch(projectsEndpoint + "all");
    const body = await result.json();
    setProjects(body.projects);
    setLoadingList(false);
    return body.projects;
  }

  async function handleTaskSelection(id: Key) {
    setShowTask(true);
    taskRef.current.scrollIntoView();
    setLoadingTask(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let endpoint = taskEndpoint + id;
    const result = await fetch(endpoint);
    const body = await result.json();
    setSelectedTask(body.task);
    setLoadingTask(false);
  }

  async function handleProjectSelection(id: Key) {
    setShowProject(true);
    setShowTask(false);
    setLoadingProject(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let endpoint = projectsEndpoint + id;
    const result = await fetch(endpoint);
    const body = await result.json();
    setSelectedProject(body.project);
    setLoadingProject(false);
  }

  useEffect(() => {
    fetchProjectList();
  }, []);

  async function handleTaskDelete() {
    setShowTask(false);
    setSelectedTask(null);
  }

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
      <Navbar></Navbar>

      <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow gap-2 p-8 lg:py-16 lg:px-20 overflow-y-scroll no-scrollbar">
        <div className="flex lg:hidden pb-1 text-panel-green text-3xl font-medium">
          My projects
        </div>
        <div className="hidden w-1 -rotate-90 absolute justify-end left-14 top-24 text-panel-green whitespace-nowrap text-3xl font-medium lg:flex">
          My projects
        </div>
        <div className="flex flex-col gap-5 overflow-y-scroll no-scrollbar">
          {loadingList ? (
            <GreenScalingDots></GreenScalingDots>
          ) : (
            projects != null && (
              <ProjectList
                projects={projects}
                handleTask={handleTaskSelection}
                handleProject={handleProjectSelection}
              ></ProjectList>
            )
          )}
        </div>
        <div ref={taskRef} className="flex">
          {showTask ? (
            editingTask ? (
              <TaskForm task={selectedTask} cancel={setEditingTask}></TaskForm>
            ) : (
              <SelectedTask
                loading={loadingTask}
                task={selectedTask}
                edit={setEditingTask}
                delete={handleTaskDelete}
              ></SelectedTask>
            )
          ) : editingProject ? (
            <ProjectForm></ProjectForm>
          ) : (
            <SelectedProject
              project={selectedProject}
              loading={loadingProject}
              edit={setEditingProject}
            ></SelectedProject>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
