import { ChevronLeftIcon } from "@heroicons/react/solid";
import { TaskProperty } from "components";
import { Design } from "utils";

export const Selected = () => {
  if (false)
    return (
      <div className="flex w-full text-panel-green justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex my-auto">
          <ChevronLeftIcon className="w-8 h-8"></ChevronLeftIcon>
          <span className="text-2xl font-bold">Select a task to view</span>
        </div>
      </div>
    );
  else {
    return (
      <div className="flex w-full justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col w-full flex-grow gap-5 overflow-hidden">
          <div className="flex flex-row">
            <TaskProperty title={"Task"}>
              <div className="text-2xl font-bold text-panel-green">
                Error when entering a string into the phone number field
              </div>
            </TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-shrink">
              <TaskProperty title={"Priority"}>
                <div
                  className={`flex justify-center my-auto px-3 whitespace-nowrap rounded-full rounded-tl-none bg-main-red`}
                >
                  <span className="text-white text-sm">High</span>
                </div>
              </TaskProperty>
            </div>
            <TaskProperty title={"Tags"}>
              <div className="flex gap-1 text-sm">
                {["Tag1", "Tag2"].map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="text-white border border-white px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </TaskProperty>
            <TaskProperty title={"Schedule"}>
              <div className="flex text-white font-medium justify-start">
                {"2022/05/01 - 2022/06/31"}
              </div>
            </TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <TaskProperty title={"Project"}>
              <div className="flex text-white font-medium justify-start">
                Albanese
              </div>
            </TaskProperty>
            <TaskProperty title={"Stage"}>
              <div
                style={Design.setBackground("2563eb")}
                className="rounded-bl-lg whitespace-nowrap rounded-tr-lg px-2 py-0.5 font-medium text-center text-white hidden md:block"
              >
                In Progress
              </div>
            </TaskProperty>
            <TaskProperty title={"Assigned"}></TaskProperty>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex w-full">
              <TaskProperty title={"Description"}>
                <div className="flex text-white text-sm overflow-y-scroll no-scrollbar max-h-42 h-42">
                  I wonder if I can implement a fully fledged Markdown editor in
                  this desc. box. I worry it could mess with the layout/CSS of
                  this block and become a pain in the ass to deal with. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quod velit
                  dolore accusamus magni, saepe natus doloremque sint
                  repellendus fugit recusandae! Rerum tempore magnam
                  exercitationem dolores consectetur deserunt aut vero rem.
                </div>
              </TaskProperty>
            </div>
            <div className="flex w-full">
              <TaskProperty title={"Attachments"}>
                <div className="flex flex-wrap gap-2 overflow-y-scroll no-scrollbar max-h-42 h-42">
                  <div className="block square bg-red-500 w-14 h-14"></div>
                  <div className="block square bg-blue-500 w-14 h-14"></div>
                  <div className="block square bg-green-500 w-14 h-14"></div>
                  <div className="block square bg-yellow-500 w-14 h-14"></div>
                </div>
              </TaskProperty>
            </div>
          </div>
          <div className="flex flex-row">
            <TaskProperty title={"Comments"}></TaskProperty>
          </div>
        </div>
      </div>
    );
  }
};
