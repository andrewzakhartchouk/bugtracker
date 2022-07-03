import {
  AddProject,
  AssignedTickets,
  GreenScalingDots,
  Greeting,
  Navbar,
  ProjectSummary,
  RecentActivity,
  Schedule,
  Tile,
} from "components";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { UserServices } from "services";
import { ProjectOverview } from "utils";

const Dashboard: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const userServices = UserServices();

  useEffect(() => {
    const fetchTaskList = async () => {
      setLoading(true);
      const data = await userServices.get(
        process.env.NEXT_PUBLIC_API + "dashboard/"
      );
      setData(data[0]);
      setLoading(false);
      return data;
    };
    fetchTaskList();
  }, []);

  if (loading) return <GreenScalingDots></GreenScalingDots>;

  return (
    <>
      <Navbar></Navbar>
      <div className="flex-grow flex flex-col p-8 lg:p-16 gap-4 w-full">
        <div className="flex">
          <Tile>
            <Greeting name={data.name}></Greeting>
          </Tile>
        </div>
        <div className="flex flex-col lg:flex-none lg:grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4 w-full">
            <Tile>
              <AssignedTickets tasks={data.tasks}></AssignedTickets>
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
              {data.projects.map((project) => {
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
    </>
  );
};

export default Dashboard;
