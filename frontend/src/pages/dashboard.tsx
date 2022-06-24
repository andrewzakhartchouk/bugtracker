import {
  AddProject,
  AssignedTickets,
  Greeting,
  Navbar,
  ProjectSummary,
  RecentActivity,
  Schedule,
  Tile,
} from "components";
import { NextPage } from "next";
import { ProjectOverview } from "utils";

const Dashboard: NextPage = () => {
  const projects: Array<ProjectOverview> = [
    {
      id: 1,
      name: "Morrison",
      team: "Team A",
      members: [
        { id: 1, name: "Darius", image: "", lead: true },
        { id: 2, name: "Jason", image: "", lead: false },
        { id: 3, name: "Andrew", image: "", lead: false },
        { id: 4, name: "Daniel", image: "", lead: false },
        { id: 5, name: "Alvin", image: "", lead: false },
        { id: 6, name: "Andrew", image: "", lead: false },
        { id: 7, name: "Daniel", image: "", lead: false },
        { id: 8, name: "Alvin", image: "", lead: false },
      ],
      stages: [
        { id: 1, name: "Backlog", count: 2, color: "FF0000" },
        { id: 2, name: "In Progress", count: 22, color: "0000FF" },
        { id: 3, name: "Reviewed", count: 200, color: "00FF00" },
      ],
    },
    {
      id: 2,
      name: "Turnbull",
      team: "Team B",
      members: [
        { id: 1, name: "James", image: "", lead: true },
        { id: 2, name: "Kevin", image: "", lead: true },
        { id: 3, name: "Andrew", image: "", lead: false },
      ],
      stages: [
        { id: 1, name: "Backlog", count: 2, color: "FF0000" },
        { id: 2, name: "Needs Attn.", count: 2, color: "FFB0BF" },
        { id: 3, name: "In Progress", count: 22, color: "0000FF" },
        { id: 4, name: "Need to Review", count: 22, color: "00FFFF" },
        { id: 5, name: "Reviewing", count: 200, color: "FF0FF0" },
        { id: 6, name: "Complete", count: 200, color: "00FF00" },
      ],
    },
    {
      id: 3,
      name: "Abbott",
      team: "Team C",
      members: [
        { id: 1, name: "Darius", image: "", lead: false },
        { id: 2, name: "Jason", image: "", lead: false },
        { id: 3, name: "Andrew", image: "", lead: false },
      ],
      stages: [
        { id: 1, name: "Backlog", count: 2, color: "FF0000" },
        { id: 2, name: "In Progress", count: 22, color: "0000FF" },
        { id: 3, name: "Reviewed", count: 200, color: "00FF00" },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
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
            {/* <Tile>
              <Schedule></Schedule>
            </Tile> */}
            <Tile>
              <RecentActivity></RecentActivity>
            </Tile>
          </div>
          <div className="flex lg:overflow-y-scroll no-scrollbar lg:relative w-full">
            <div className="grid grid-cols-2 lg:absolute gap-4 w-full">
              {projects.map((project) => {
                return (
                  <Tile key={project.id}>
                    <ProjectSummary {...project}></ProjectSummary>
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
