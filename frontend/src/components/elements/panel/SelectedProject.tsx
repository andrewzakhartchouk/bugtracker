import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { GreenScalingDots, PanelProperty, ProjectButtons } from "components";
import { CompleteProject, User } from "utils";

interface Props {
  project: CompleteProject | null;
  loading: boolean;
  edit: Function;
  delete: Function;
}

export const SelectedProject = (props: Props) => {
  if (props.loading)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <GreenScalingDots></GreenScalingDots>
      </div>
    );

  if (props.project == null)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex my-auto">
          <ChevronUpIcon className="block lg:hidden w-8 h-8"></ChevronUpIcon>
          <ChevronLeftIcon className="hidden lg:block w-8 h-8"></ChevronLeftIcon>
          <span className="text-2xl font-bold">
            Select a project/task to view
          </span>
        </div>
      </div>
    );
  else {
    return (
      <>
        <div className="flex w-full justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
          <div className="flex flex-col w-full flex-grow gap-5 overflow-hidden">
            <div className="flex flex-row">
              <PanelProperty title={"Project"}>
                <div className="text-base max-h-8 overflow-y-scroll no-scrollbar font-bold text-panel-green lg:text-2xl">
                  {props.project.name}
                </div>
              </PanelProperty>
            </div>
            <div className="flex flex-row gap-3">
              <PanelProperty title={"Started"}>
                <div className="flex whitespace-nowrap text-white justify-start text-xs font-medium lg:text-base">
                  {props.project.created_at}
                </div>
              </PanelProperty>
              <PanelProperty title={"Project Lead"}>
                <ul>
                  {props.project.team
                    .filter((user) => {
                      return user.lead === true;
                    })
                    .map((user) => {
                      return (
                        <li className="flex" key={user.id}>
                          <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
                          <div className="text-white w-28 overflow-x-scroll no-scrollbar my-auto text-xs lg:text-base">
                            {user.name}
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </PanelProperty>
              <PanelProperty title={"Members"}>
                <>
                  {props.project.team
                    .filter((user) => {
                      return user.lead !== true;
                    })
                    .map((user) => {
                      return (
                        <li className="flex" key={user.id}>
                          <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
                          <div className="text-white w-28 overflow-x-scroll no-scrollbar my-auto text-xs lg:text-base">
                            {user.name}
                          </div>
                        </li>
                      );
                    })}
                </>
              </PanelProperty>
            </div>
            <div className="flex flex-row gap-3 w-full">
              <PanelProperty title={"Stages"}>
                <ul>
                  {props.project.stages.map((stage) => {
                    return (
                      <li key={stage.id} className="">
                        <div>{stage.name}</div>
                        <div>
                          <ChevronUpIcon className="h-4"></ChevronUpIcon>
                        </div>
                        <div>
                          <ChevronDownIcon className="h-4"></ChevronDownIcon>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </PanelProperty>
              <div className="flex flex-grow"></div>
            </div>
          </div>
        </div>

        <div className="flex h-full items-center relative">
          <ProjectButtons
            edit={props.edit}
            addUser={() => console.log("test")}
            delete={props.delete}
          ></ProjectButtons>
        </div>
      </>
    );
  }
};
