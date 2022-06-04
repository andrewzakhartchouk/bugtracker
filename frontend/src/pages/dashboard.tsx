import {
  AddProject,
  AssignedTickets,
  Greeting,
  Navbar,
  Project,
  RecentActivity,
  Schedule,
  Tile,
} from "components";
import { NextPage } from "next";

interface Project {
  projectName: string;
  team: Array<User>;
  stages: Array<Stage>;
}

interface User {
  name: string;
  image: string;
  lead: boolean;
}

interface Stage {
  name: string;
  count: number;
  color: string;
}

const Dashboard: NextPage = () => {
  const projects: Array<Project> = [
    {
      projectName: "Morrison",
      team: [
        { name: "Darius", image: "", lead: true },
        { name: "Jason", image: "", lead: false },
        { name: "Andrew", image: "", lead: false },
        { name: "Daniel", image: "", lead: false },
        { name: "Alvin", image: "", lead: false },
      ],
      stages: [
        { name: "Backlog", count: 2, color: "FF0000" },
        { name: "In Progress", count: 22, color: "0000FF" },
        { name: "Reviewed", count: 200, color: "00FF00" },
      ],
    },
    {
      projectName: "Turnbull",
      team: [
        { name: "James", image: "", lead: true },
        { name: "Kevin", image: "", lead: true },
        { name: "Andrew", image: "", lead: false },
      ],
      stages: [
        { name: "Backlog", count: 2, color: "FF0000" },
        { name: "Needs Attn.", count: 2, color: "FFB0BF" },
        { name: "In Progress", count: 22, color: "0000FF" },
        { name: "Need to Review", count: 22, color: "00FFFF" },
        { name: "Reviewing", count: 200, color: "FF0FF0" },
        { name: "Complete", count: 200, color: "00FF00" },
      ],
    },
    {
      projectName: "Abbott",
      team: [
        { name: "Darius", image: "", lead: false },
        { name: "Jason", image: "", lead: false },
        { name: "Andrew", image: "", lead: false },
      ],
      stages: [
        { name: "Backlog", count: 2, color: "FF0000" },
        { name: "In Progress", count: 22, color: "0000FF" },
        { name: "Reviewed", count: 200, color: "00FF00" },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar lg:overflow-hidden">
      <Navbar></Navbar>
      <div className="flex-grow flex flex-col p-8 lg:p-16 gap-4 w-full">
        <div className="flex">
          <Tile>
            <Greeting name={"Andrew"}></Greeting>
          </Tile>
        </div>
        <div className="flex flex-col lg:flex-none lg:grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 w-full">
            <Tile>
              <AssignedTickets></AssignedTickets>
            </Tile>
            <Tile>
              <Schedule></Schedule>
            </Tile>
            <Tile>
              <RecentActivity></RecentActivity>
            </Tile>
          </div>
          <div className="flex lg:overflow-y-scroll no-scrollbar lg:relative w-full">
            <div className="grid grid-cols-2 lg:absolute gap-4 w-full">
              {projects.map((project, index) => {
                return (
                  <Tile key={index}>
                    <Project {...project}></Project>
                  </Tile>
                );
              })}
              <AddProject></AddProject>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
