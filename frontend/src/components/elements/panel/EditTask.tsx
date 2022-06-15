import { XIcon } from "@heroicons/react/solid";
import { FormButtons, TaskEditField } from "components";
import { ChangeEvent, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";

export const EditTask = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const [tags, setTags] = useState<Array<string>>([]);

  function handleTags(event: ChangeEvent<HTMLInputElement>) {
    let input: string = event.target.value;
    if (input == "") setTags([]);
    else if (/\s/.test(input) && input.trim() != "") {
      setTags((state) => [...state, input]);
      setValue("tags", "");
    }
  }

  function removeTag(tag: string) {
    let result: Array<string> = tags.filter((a) => a !== tag);
    setTags(result);
  }

  const defaultPriority = 0;
  const priorityOptions = [
    {
      value: 0,
      label: "High",
    },
    {
      value: 1,
      label: "Medium",
    },
    {
      value: 2,
      label: "Low",
    },
  ];

  const priorityStyle: StylesConfig = {
    menu: (provided, state) => ({
      ...provided,
      background: "#081C15",
      color: "white",
      padding: 0,
    }),
    control: (provided, state) => ({
      ...provided,
      background: "transparent",
      outline: "none",
      border: 0,
      padding: 0,
      boxShadow: "none",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: 0,
      color: "white",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      padding: 0,
      color: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#3F906B" : "#081C15",
      ":hover": {
        backgroundColor: "#3F906B",
      },
    }),
  };

  return (
    <>
      <form className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <TaskEditField title="Task">
              <input
                type="text"
                {...register("task")}
                aria-label="Task"
                className="text-2xl font-medium text-white bg-transparent border-0 outline-none w-flex break-normal"
              />
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Priority">
              <Controller
                control={control}
                defaultValue={defaultPriority}
                name="priority"
                render={({ field }) => (
                  <Select
                    placeholder=""
                    defaultValue={defaultPriority}
                    instanceId={"prioritySelect"}
                    styles={priorityStyle}
                    onChange={(val) => field.onChange(val.value)}
                    options={priorityOptions}
                  ></Select>
                )}
              ></Controller>
            </TaskEditField>
            <TaskEditField title="Tags">
              <div className="flex flex-row gap-1 flex-wrap">
                <div className="flex gap-1 flex-wrap">
                  {tags.length > 0 &&
                    tags.map((tag, index) => {
                      if (tag != "")
                        return (
                          <div
                            key={index}
                            className="flex text-white rounded-full px-2 text-sm border-2 border-white"
                          >
                            <span className="my-auto">{tag}</span>
                            <XIcon
                              className="h-4 w-4 my-auto cursor-pointer"
                              onClick={() => removeTag(tag)}
                            ></XIcon>
                          </div>
                        );
                    })}
                </div>
                <input
                  type="text"
                  {...register("tags")}
                  onChange={(e) => handleTags(e)}
                  aria-label="Tags"
                  className="flex font-medium text-white bg-transparent border-0 outline-none"
                />
              </div>
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Start Date">
              <input
                type="date"
                {...register("start_date")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert"
              />
            </TaskEditField>
            <TaskEditField title="End Date">
              <input
                type="date"
                {...register("end_date")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert"
              />
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Project"></TaskEditField>
            <TaskEditField title="Stage"></TaskEditField>
            <TaskEditField title="Assigned"></TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Description">
              <textarea
                {...register("description")}
                rows={10}
                className="w-full bg-transparent text-white resize-none outline-none"
              ></textarea>
            </TaskEditField>
          </div>
        </div>
      </form>

      <div className="flex h-full items-center relative">
        <FormButtons
          confirm={handleSubmit(onSubmit)}
          cancel={() => console.log("Cancel")}
        ></FormButtons>
      </div>
    </>
  );
};
