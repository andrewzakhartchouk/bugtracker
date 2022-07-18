import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { UserServices } from "services";
import { useClickOutside } from "hooks";
import { Palette } from "./Palette";
import { Design } from "utils";
import { ViewGridIcon } from "@heroicons/react/solid";

interface Props {
  projectId: number;
  refreshProject: Function;
}

export const AddStage = (props: Props) => {
  const stagesEndpoint: string = process.env.NEXT_PUBLIC_API + "stages/";

  const [creating, setCreating] = useState(false);
  const [showPalette, setShowPalette] = useState(false);
  const [selectedColor, setSelectedColor] = useState("ffffff");
  const inputRef = useClickOutside(() => setCreating(false));

  const userServices = UserServices();

  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Stage name is required." },
    color: { required: "Color is required." },
  };

  function handleColorChange(color: string) {
    setSelectedColor(color);
  }

  async function handleCreate(data: any) {
    setCreating(false);
    const formData = { project: props.projectId, ...data };
    console.log(formData);
    try {
      await userServices.post(stagesEndpoint, formData);
      props.refreshProject();
    } catch (error: any) {
      console.log(error);
      Object.entries(error).forEach((e) => {
        const [key, value] = e;
        setError(key, { type: "manual", message: value[0] });
      });
    }
  }

  if (creating)
    return (
      <form
        className="relative flex flex-row py-2 px-5 rounded-xl text-white whitespace-nowrap justify-center"
        ref={inputRef}
      >
        <div className="flex flex-col">
          <div className="flex flex-row">
            <input
              type="text"
              {...register("name", {
                ...formValidation.name,
              })}
              autoFocus={true}
              aria-label="Stage"
              placeholder="Name"
              className="flex my-auto bg-transparent font-medium text-center outline-1 border-b border hover:outline focus-visible:outline-0 focus-visible:outline-white"
            />
            <button onClick={handleSubmit(handleCreate)}></button>
            <ViewGridIcon
              style={Design.setColor(selectedColor)}
              onClick={() => setShowPalette(!showPalette)}
              className="h-4 mx-2 cursor-pointer hover:text-gray-300 lg:h-6"
            ></ViewGridIcon>
            <Controller
              control={control}
              {...register("color", {
                ...formValidation.color,
              })}
              ref={null}
              render={({ field }) => (
                <Palette
                  handleChange={(color: string) => {
                    handleColorChange(color);
                    field.onChange(color);
                  }}
                  setShowPalette={setShowPalette}
                  showPalette={showPalette}
                ></Palette>
              )}
            ></Controller>
          </div>
          <small className="text-main-red my-auto">
            {errors?.name && errors.name.message}
          </small>
          <small className="text-main-red my-auto">
            {errors?.color && errors.color.message}
          </small>
        </div>
      </form>
    );

  return (
    <button
      onClick={() => setCreating(true)}
      className="text-xs text-gray-400 font-light py-2 border-gray-400 hover:border mx-1 rounded-lg lg:text-base"
    >
      + Add stage
    </button>
  );
};
