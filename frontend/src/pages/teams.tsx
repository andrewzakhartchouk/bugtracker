import { PlusIcon } from "@heroicons/react/solid";
import { GreenScalingDots, Navbar, Panel } from "components";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { TeamType } from "utils";

const Teams: NextPage = () => {
  const teamsEndpoint = "/api/teams/list";

  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeamsList();
  }, []);

  async function fetchTeamsList() {
    setLoading(true);
    const result = await fetch(teamsEndpoint);
    const body = await result.json();
    setTeams(body.teams);
    setLoading(false);
    return body.teams;
  }

  if (loading)
    return (
      <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
        <Navbar></Navbar>
        <GreenScalingDots></GreenScalingDots>
      </div>
    );

  return (
    <>
      <div className="flex flex-col h-screen bg-bg-green bg-bottom bg-waves overflow-y-scroll no-scrollbar">
        <Navbar></Navbar>
        <div className="flex-grow flex flex-col p-8 lg:p-16 gap-4 w-full overflow-y-scroll no-scrollbar">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teams.map((team: TeamType) => {
              return (
                <>
                  <Panel>
                    <div className="flex flex-col w-full gap-2">
                      <span className="text-gray-800 font-bold text-lg md:text-xl lg:text-2xl">
                        {team.name}
                      </span>
                      <div className="flex flex-row w-full">
                        <ul className="flex flex-col w-full">
                          <span className="text-sm lg:text-base font-medium">
                            Members
                          </span>
                          {team.members.map((member) => {
                            return (
                              <li
                                key={member.id}
                                className="flex text-sm text-gray-600"
                              >
                                {member.name}
                              </li>
                            );
                          })}
                          <span className="flex cursor-pointer text-xs text-low-green hover:text-high-green">
                            + Add member
                          </span>
                        </ul>
                        <ul className="flex flex-col w-full">
                          <span className="text-sm lg:text-base font-medium">
                            Projects
                          </span>
                          {team.projects.map((project) => {
                            return (
                              <li
                                key={project.id}
                                className="flex text-sm text-gray-600"
                              >
                                {project.name}
                              </li>
                            );
                          })}
                          <span className="flex cursor-pointer text-xs text-low-green hover:text-high-green">
                            + Add project
                          </span>
                        </ul>
                      </div>
                    </div>
                  </Panel>
                </>
              );
            })}
            <div className="w-full group flex justify-center border-8 border-panel-green rounded-tr-3xl rounded-bl-3xl cursor-pointer hover:border-main-green">
              <PlusIcon className="my-auto h-16 w-16 text-panel-green group-hover:text-main-green"></PlusIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
