import {
  ChevronDownIcon,
  ChevronUpIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useClickOutside } from "hooks";
import { useState } from "react";
import { Design, Stage } from "utils";

interface Props {
  stage: Stage;
}

export const StageBlock = (props: Props) => {
  const stagesEndpoint = "api/stages/";

  const [showPalette, setShowPalette] = useState(false);
  const paletteRef = useClickOutside(() => setShowPalette(false));

  const palette: Array<string> = [
    "#e63232",
    "#f3722c",
    "#f8961e",
    "#FFC71F",
    "#7fc96b",
    "#43aa8b",
    "#277da1",
    "#3b498e",
    "#66418a",
  ];

  function handleColorChange(color: string) {
    setShowPalette(false);

    const data = { id: props.stage.id, color: color };
    const jsonData = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    };

    fetch(stagesEndpoint, options);
  }

  return (
    <div className="relative">
      <li
        key={props.stage.id}
        style={Design.setBackground(props.stage.color)}
        className="flex flex-row py-2 px-5 rounded-xl text-white whitespace-nowrap justify-between"
      >
        <div className="flex gap-1">
          <ChevronUpIcon className="h-6 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-green"></ChevronUpIcon>
          <ChevronDownIcon className="h-6 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-red"></ChevronDownIcon>
        </div>
        <span className="my-auto font-medium">{props.stage.name}</span>
        <ViewGridIcon
          onClick={() => setShowPalette(!showPalette)}
          className="h-6 cursor-pointer hover:text-gray-300"
        ></ViewGridIcon>
      </li>
      <div className="absolute right-8 flex w-full justify-end">
        <div
          ref={paletteRef}
          className={`justify-self-end z-10 grid-cols-9 gap-0.5 p-2 bg-panel-green rounded-br-xl rounded-tl-xl ${
            showPalette ? "grid" : "hidden"
          }`}
        >
          {palette.map((color, index) => {
            return (
              <div
                key={index}
                onClick={() => handleColorChange(color)}
                className={`h-6 w-6 bg-stage-color-${
                  index + 1
                } cursor-pointer hover:opacity-60`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
