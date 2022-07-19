import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserServices } from "services";
import { Design, Stage } from "utils";
import { Palette } from "./Palette";

interface Props {
  stage: Stage;
  refreshProject: Function;
}

export const StageBlock = (props: Props) => {
  const stagesEndpoint: string = process.env.NEXT_PUBLIC_API + "stages/";

  const [showPalette, setShowPalette] = useState(false);
  const [editingName, setEditingName] = useState(false);
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

  async function deleteStage() {
    await userServices.destroy(
      stagesEndpoint + `${props.stage.id}/destroy/`,
      null
    );
    props.refreshProject();
  }

  useEffect(() => {
    reset({
      name: props.stage.name,
    });
  }, [props.stage.name, reset]);

  return (
    <div className="relative group flex overflow-x-visible">
      <div
        style={Design.setBackground(props.stage.color)}
        className="flex flex-row w-full py-2 px-5 rounded-xl text-white whitespace-nowrap relative"
      >
        <div className="flex gap-1 absolute left-5">
          <ArrowSmUpIcon
            className="h-4 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-green lg:h-6"
            onClick={() => handleOrderChange(props.stage.order - 1)}
          ></ArrowSmUpIcon>
          <ArrowSmDownIcon
            className="h-4 my-auto rounded-full p-0.5 cursor-pointer hover:bg-white hover:text-main-red lg:h-6"
            onClick={() => handleOrderChange(props.stage.order + 1)}
          ></ArrowSmDownIcon>
        </div>
        <form className="flex mx-auto">
          <input
            type="text"
            {...register("name", {
              ...formValidation.name,
              onChange: (e) => {
                setEditingName(true);
              },
            })}
            aria-label="Stage"
            className="my-auto font-medium bg-transparent text-xs text-center outline-1 hover:outline focus-visible:outline-0 focus-visible:outline-white lg:text-base"
          />
          {editingName && (
            <button onClick={handleSubmit(handleNameChange)}></button>
          )}
        </form>
        <div className="absolute flex right-5">
          <ViewGridIcon
            onClick={() => setShowPalette(!showPalette)}
            className="h-4 cursor-pointer hover:text-gray-300 lg:h-6"
          ></ViewGridIcon>
        </div>
      </div>
      <XIcon
        onClick={() => deleteStage()}
        className="cursor-pointer text-main-red my-auto ml-1 h-4 hover:text-gray-300 lg:h-6"
      ></XIcon>
      <Palette
        handleChange={handleColorChange}
        setShowPalette={setShowPalette}
        showPalette={showPalette}
      ></Palette>
    </div>
  );
};
