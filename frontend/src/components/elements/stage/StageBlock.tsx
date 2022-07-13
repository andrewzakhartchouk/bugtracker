import {
  ChevronDownIcon,
  ChevronUpIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useClickOutside } from "hooks";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserServices } from "services";
import { Design, Stage } from "utils";

interface Props {
  stage: Stage;
  refreshProject: Function;
}

export const StageBlock = (props: Props) => {
  const stagesEndpoint: string = process.env.NEXT_PUBLIC_API + "stages/";

  const [showPalette, setShowPalette] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const paletteRef = useClickOutside(() => setShowPalette(false));
  const userServices = UserServices();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Project name is required." },
  };

  const palette: Array<string> = [
    "e63232",
    "f3722c",
    "f8961e",
    "FFC71F",
    "7fc96b",
    "43aa8b",
    "277da1",
    "3b498e",
    "66418a",
  ];

  async function handleColorChange(color: string) {
    setShowPalette(false);

    const data = { color: color };
    await userServices.patch(
      stagesEndpoint + `${props.stage.id}/update/`,
      data
    );
    props.refreshProject();
  }

  async function handleNameChange(data: any) {
    const formData = { ...data };
    await userServices.patch(
      stagesEndpoint + `${props.stage.id}/update/`,
      formData
    );
    props.refreshProject();
  }

  async function handleOrderChange(order: number) {
    const data = { order: order };
    await userServices.patch(
      stagesEndpoint + `${props.stage.id}/update/`,
      data
    );
    props.refreshProject();
  }

  useEffect(() => {
    reset({
      name: props.stage.name,
    });
  }, [props.stage.name, reset]);

  return (
    <div className="relative">
      <li
        key={props.stage.id}
        style={Design.setBackground(props.stage.color)}
        className="flex flex-row py-2 px-5 rounded-xl text-white whitespace-nowrap justify-between"
      >
        <div className="flex gap-1">
          <ChevronUpIcon
            className="h-6 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-green"
            onClick={() => handleOrderChange(props.stage.order - 1)}
          ></ChevronUpIcon>
          <ChevronDownIcon
            className="h-6 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-red"
            onClick={() => handleOrderChange(props.stage.order + 1)}
          ></ChevronDownIcon>
        </div>
        <form>
          <input
            type="text"
            {...register("name", {
              ...formValidation.name,
              onChange: (e) => {
                setEditingName(true);
              },
            })}
            aria-label="Stage"
            className="my-auto font-medium bg-transparent text-center outline-1 hover:outline focus-visible:outline-0 focus-visible:outline-white"
          />
          {editingName && (
            <button onClick={handleSubmit(handleNameChange)}></button>
          )}
        </form>
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
