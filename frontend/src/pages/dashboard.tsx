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

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-bg-green overflow-auto">
      <Navbar></Navbar>
      <div className="flex flex-grow bg-bottom bg-waves p-20">
        <div className="flex flex-col gap-4">
          <Tile>
            <Greeting name={"Andrew"}></Greeting>
          </Tile>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="grid grid-cols-1 gap-4">
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
            <div className="grid grid-cols-2 gap-4">
              <Tile>
                <Project></Project>
              </Tile>
              <Tile>
                <Project></Project>
              </Tile>
              <Tile>
                <Project></Project>
              </Tile>
              <Tile>
                <AddProject></AddProject>
              </Tile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
