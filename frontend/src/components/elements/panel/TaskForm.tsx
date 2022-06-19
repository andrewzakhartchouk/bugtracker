import { XIcon } from "@heroicons/react/solid";
import { FormButtons, SelectStyle, TaskEditField } from "components";
import { ChangeEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { CompleteTask, ProjectLabel, Stage, User } from "utils";

interface Props {
  task: CompleteTask | null;
  cancel: Function;
}

export const TaskForm = (props: Props) => {
  const projectsEndpoint: string = "/api/projects/list";
  const usersEndpoint: string = "/api/users/list";
  const tasksEndpoint: string = "/api/tasks";

  const [assignedInput, setAssignedInput] = useState("");
  const [defaultProject, setDefaultProject] = useState<Object | null>(null);
  const [defaultStage, setDefaultStage] = useState<Object | null>(null);
  const [defaultUser, setDefaultUser] = useState<Object | null>(null);
  const [projectInput, setProjectInput] = useState("");
  const [stageOptions, setStageOptions] = useState<Array<Object>>([]);
  const [tags, setTags] = useState<Array<string>>([]);

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Task name is required." },
    project: { required: "Project is required." },
    stage: { required: "Stage is required." },
  };

  function handleAssignedInputChange(value: string) {
    setAssignedInput(value);
  }

  function handleProjectChange(option: Object) {
    setDefaultProject(option);
    handleStageOptions(option?.stages);
    setDefaultStage({});
    setValue("stage", null);
  }

  function handleProjectInputChange(value: string) {
    setProjectInput(value);
  }

  function handleStageOptions(stages: Array<Stage>) {
    const options = stages.map((stage) => ({
      label: stage.name,
      value: stage.id,
    }));
    setStageOptions(options);
  }

  function handleTags(event: ChangeEvent<HTMLInputElement>) {
    const input: string = event.target.value;
    const trimmed = input.trim();
    if (input == "") setTags([]);
    else if (/\s/.test(input) && trimmed != "") {
      setTags((state) => [...state, trimmed]);
      setValue("tags", "");
    }
  }

  const loadProjectOptions = async (
    inputValue: string,
    callback: (arg0: any) => void
  ): Promise<any> => {
    const response = await fetch(projectsEndpoint);
    const json = await response.json();
    const object = json.projects;
    callback(
      object.map((project: ProjectLabel) => ({
        label: `${project.name}`,
        value: project.id,
        stages: project.stages,
      }))
    );
  };

  const loadUserOptions = async (
    inputValue: string,
    callback: (arg0: any) => void
  ): Promise<any> => {
    const response = await fetch(usersEndpoint);
    const json = await response.json();
    const object = json.users;
    callback(
      object.map((user: User) => ({
        label: `${user.name}`,
        value: user.id,
      }))
    );
  };

  async function onSubmit(data: any) {
    const formData = { ...data, tags };
    console.log(formData);
    if (props.task) {
      const res = await fetch(tasksEndpoint, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      console.log(response);
    } else {
      const res = await fetch(tasksEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      console.log(response);
    }
  }

  function removeTag(tag: string) {
    const result: Array<string> = tags.filter((a) => a !== tag);
    setTags(result);
  }

  useEffect(() => {
    if (props.task) {
      reset({
        name: props.task.name,
        priority: props.task.priority,
        start_date: props.task.start_date,
        end_date: props.task.end_date,
        project: props.task.project.id,
        stage: props.task.stage.id,
        assigned: props.task.assigned.id,
        description: props.task.description,
      });
      setTags(props.task.tags);
      setDefaultProject({
        label: props.task.project.name,
        value: props.task.project.id,
      });
      setDefaultStage({
        label: props.task.stage.name,
        value: props.task.stage.id,
      });
      setStageOptions(
        props.task.project.stages.map((stage) => ({
          label: `${stage.name}`,
          value: stage.id,
        }))
      );
      setDefaultUser({
        label: props.task.assigned.name,
        value: props.task.assigned.id,
      });
    } else {
      reset({
        name: null,
        priority: null,
        start_date: null,
        end_date: null,
        project: null,
        stage: null,
        assigned: null,
        description: null,
      });
    }
  }, [props.task, reset]);

  return (
    <>
      <form className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <TaskEditField title="Task">
              <input
                type="text"
                {...register("name", formValidation.name)}
                aria-label="Task"
                className="text-lg font-medium text-white bg-transparent border-0 outline-none w-flex break-normal w-full lg:text-2xl"
              />
              <small className="text-main-red">
                {errors?.name && errors.name.message}
              </small>
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex basis-4/12">
              <TaskEditField title="Priority">
                <select
                  {...register("priority")}
                  className="bg-transparent text-white w-full outline-none text-sm lg:text-base"
                >
                  <option value={0} className="text-black bg-transparent">
                    High
                  </option>
                  <option value={1} className="text-black bg-transparent">
                    Medium
                  </option>
                  <option value={2} className="text-black bg-transparent">
                    Low
                  </option>
                </select>
              </TaskEditField>
            </div>
            <div className="flex basis-9/12">
              <TaskEditField title="Tags">
                <div className="flex gap-1 flex-wrap w-full">
                  {tags.length > 0 &&
                    tags.map((tag, index) => {
                      if (tag != "")
                        return (
                          <div
                            key={index}
                            className="inline-flex text-white rounded-full px-2 text-xs lg:text-sm border-2 border-white"
                          >
                            <span className="my-auto">{tag}</span>
                            <XIcon
                              className="h-4 w-4 my-auto cursor-pointer"
                              onClick={() => removeTag(tag)}
                            ></XIcon>
                          </div>
                        );
                    })}
                  <input
                    type="text"
                    {...register("tags")}
                    onChange={(e) => handleTags(e)}
                    aria-label="Tags"
                    className="w-auto font-medium text-white bg-transparent border-0 outline-none text-sm lg:text-base"
                  />
                </div>
              </TaskEditField>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Start Date">
              <input
                type="date"
                aria-label="Start date"
                {...register("start_date")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert text-sm lg:text-base"
              />
            </TaskEditField>
            <TaskEditField title="End Date">
              <input
                type="date"
                aria-label="End date"
                {...register("end_date")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert text-sm lg:text-base"
              />
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Project">
              <Controller
                control={control}
                {...register("project", formValidation.project)}
                ref={null}
                render={({ field }) => (
                  <AsyncSelect
                    aria-label="Project"
                    value={defaultProject}
                    cacheOptions={true}
                    styles={SelectStyle}
                    loadOptions={loadProjectOptions}
                    onInputChange={handleProjectInputChange}
                    defaultOptions={true}
                    components={{ DropdownIndicator: () => null }}
                    onChange={(option) => {
                      handleProjectChange(option);
                      return field.onChange(option?.value);
                    }}
                  ></AsyncSelect>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.project && errors.project.message}
              </small>
            </TaskEditField>
            <TaskEditField title="Stage">
              <Controller
                control={control}
                {...register("stage", formValidation.stage)}
                ref={null}
                render={({ field }) => (
                  <Select
                    aria-label="Stage"
                    value={defaultStage}
                    styles={SelectStyle}
                    options={stageOptions}
                    components={{ DropdownIndicator: () => null }}
                    onChange={(option) => {
                      setDefaultStage(option);
                      return field.onChange(option?.value);
                    }}
                  ></Select>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.stage && errors.stage.message}
              </small>
            </TaskEditField>
            <TaskEditField title="Assigned">
              <Controller
                control={control}
                name="assigned"
                render={({ field }) => (
                  <AsyncSelect
                    aria-label="Assigned"
                    value={defaultUser}
                    cacheOptions={true}
                    styles={SelectStyle}
                    isClearable={true}
                    components={{ DropdownIndicator: () => null }}
                    loadOptions={loadUserOptions}
                    onInputChange={handleAssignedInputChange}
                    defaultOptions={true}
                    onChange={(option) => {
                      setDefaultUser(option);
                      return field.onChange(option?.value);
                    }}
                  ></AsyncSelect>
                )}
              ></Controller>
            </TaskEditField>
          </div>
          <div className="flex flex-row gap-2">
            <TaskEditField title="Description">
              <textarea
                aria-label="Description"
                {...register("description")}
                rows={5}
                className="w-full bg-transparent text-white resize-none outline-none no-scrollbar text-sm lg:text-base"
              ></textarea>
            </TaskEditField>
          </div>
        </div>
      </form>

      <div className="flex h-full items-center relative">
        <FormButtons
          confirm={handleSubmit(onSubmit)}
          cancel={props.cancel}
        ></FormButtons>
      </div>
    </>
  );
};
