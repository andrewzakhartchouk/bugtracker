import { Navbar, Panel, Selected, SortBar, TaskList } from "components";
import { ListTask, Priority, TaskUtil } from "utils";

const Tasks = () => {
  const tasks: Array<ListTask> = [
    {
      id: 1,
      project: 1,
      stage: { name: "Review", color: "22f55e" },
      priority: Priority.High,
      tags: "Tag1",
      end_date: "2022/06/03",
      description: "Make the backend",
      comment_number: 10,
    },
    {
      id: 2,
      project: 1,
      stage: { name: "In Progress", color: "3bf2f6" },
      priority: Priority.Medium,
      tags: "Tag2 Tag3",
      end_date: "2022/06/04",
      description: "Learn graphene, build the GraphQL API",
      comment_number: 3,
    },
    {
      id: 3,
      project: 2,
      stage: { name: "Backlog", color: "ef44ee" },
      priority: Priority.Low,
      tags: "Tag3",
      end_date: "2022/06/10",
      description:
        "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
      comment_number: 1,
    },
    {
      id: 1,
      project: 1,
      stage: { name: "Review", color: "22f55e" },
      priority: Priority.High,
      tags: "Tag1",
      end_date: "2022/06/12",
      description: "Make the backend",
      comment_number: 10,
    },
    {
      id: 2,
      project: 1,
      stage: { name: "In Progress", color: "3bf2f6" },
      priority: Priority.Medium,
      tags: "Tag2 Tag3",
      end_date: "2022/06/13",
      description: "Learn graphene, build the GraphQL API",
      comment_number: 3,
    },
    {
      id: 3,
      project: 2,
      stage: { name: "Backlog", color: "ef44ee" },
      priority: Priority.Low,
      tags: "Tag3",
      end_date: "2022/05/20",
      description:
        "Make responsive layouts for every page and handle long text that keeps going on and on and on and on and on and on...",
      comment_number: 1,
    },
  ];

  const test = TaskUtil.sortByProject(tasks);

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
              <SortBar></SortBar>
              <TaskList tasks={tasks}></TaskList>
            </div>
          </Panel>
        </div>
        <div className="flex w-full">
          <Selected>test</Selected>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
