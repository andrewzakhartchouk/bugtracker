import { XIcon } from "@heroicons/react/solid";
import { FormButtons, SelectStyle, FormField } from "components";
import { ChangeEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { CompleteTask, ProjectOverview, Stage, User } from "utils";
import { UserServices } from "services";
import { format } from "date-fns";

interface Props {
  task: CompleteTask | null;
  cancel: Function;
  onEdit: Function;
  onCreate: Function;
}

export const TaskForm = (props: Props) => {
  const projectsEndpoint: string = process.env.NEXT_PUBLIC_API + "projects/";
  const tasksEndpoint: string = process.env.NEXT_PUBLIC_API + "tasks/";

  const [defaultProject, setDefaultProject] = useState<Object | null>(null);
  const [defaultStage, setDefaultStage] = useState<Object | null>(null);
  const [defaultUser, setDefaultUser] = useState<Object | null>(null);
  const [stageOptions, setStageOptions] = useState<Array<Object>>([]);
  const [userOptions, setUserOptions] = useState<Array<Object>>([]);
  const [tags, setTags] = useState<Array<string>>([]);

  const userServices = UserServices();

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Task name is required." },
    project: { required: "Project is required." },
    stage: { required: "Stage is required." },
  };

  function handleProjectChange(option: Object) {
    setDefaultProject(option);
    setDefaultUser([]);
    handleStageOptions(option?.stages);
    handleUserOptions(option?.members);
    setDefaultStage({});
    setValue("stage", null);
  }

  function handleStageOptions(stages: Array<Stage>) {
    if (stages) {
      const options = mapOptions(stages);
      setStageOptions(options);
    }
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

  function handleUserOptions(users: Array<User>) {
    if (users) {
      const options = mapOptions(users);
      setUserOptions(options);
    }
  }

  const loadProjectOptions = async (
    inputValue: string,
    callback: (arg0: any) => void
  ): Promise<any> => {
    const options = await userServices.get(projectsEndpoint);
    callback(
      options.map((project: ProjectOverview) => ({
        label: `${project.name}`,
        value: project.id,
        stages: project.stages,
        members: project.members,
      }))
    );
  };

  function mapOptions(options: Array<any>) {
    return options.map((option) => ({
      value: option.id,
      label: option.name,
    }));
  }

  async function onSubmit(data: any) {
    const formData = { ...data, tags: tags.join(" ") };

    if (props.task) {
      try {
        const res = await userServices.put(
          tasksEndpoint + `${props.task.id}/update/`,
          formData
        );
        props.onEdit();
      } catch (error) {
        displayFormErrors(error);
      }
    } else {
      try {
        const res = await userServices.post(tasksEndpoint, formData);
        props.onCreate();
      } catch (error) {
        displayFormErrors(error);
      }
    }
  }

  function displayFormErrors(error: any) {
    Object.entries(error).forEach((e) => {
      const [key, value] = e;
      setError(key, { type: "manual", message: value[0] });
    });
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
        start_at: format(new Date(props.task.start_at), "Y-MM-dd"),
        end_at: format(new Date(props.task.end_at), "Y-MM-dd"),
        project: props.task.project.id,
        stage: props.task.stage.id,
        assigned_members: props.task.assigned_members.map((user) => {
          return user.id;
        }),
        description: props.task.description,
      });
      setTags(props.task.tags.split(" "));
      setDefaultProject({
        label: props.task.project.name,
        value: props.task.project.id,
      });
      setDefaultStage({
        label: props.task.stage.name,
        value: props.task.stage.id,
      });
      setDefaultUser(
        props.task.assigned_members.map((user: User) => {
          return { label: user.name, value: user.id };
        })
      );
      setStageOptions(
        props.task.project.stages.map((stage) => ({
          label: `${stage.name}`,
          value: stage.id,
        }))
      );
      setUserOptions(
        props.task.project.members.map((user: User) => ({
          label: `${user.name}`,
          value: user.id,
        }))
      );
    } else {
      reset({
        name: null,
        priority: 0,
        start_date: null,
        end_date: null,
        project: null,
        stage: null,
        assigned_members: [],
        description: null,
      });
      setTags([]);
      setDefaultProject(null);
      setDefaultStage(null);
      setDefaultUser([]);
    }
  }, [props.task, reset]);

  return (
    <>
      <form className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <FormField title="Task">
              <input
                type="text"
                {...register("name", formValidation.name)}
                aria-label="Task"
                className="text-lg font-medium text-white bg-transparent border-0 outline-none w-flex break-normal w-full lg:text-2xl"
              />
              <small className="text-main-red">
                {errors?.name && errors.name.message}
              </small>
            </FormField>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex basis-4/12">
              <FormField title="Priority">
                <select
                  {...register("priority")}
                  className="bg-transparent text-white w-full outline-none text-sm lg:text-base"
                >
                  <option value={0} className="text-black bg-transparent">
                    None
                  </option>
                  <option value={1} className="text-black bg-transparent">
                    High
                  </option>
                  <option value={2} className="text-black bg-transparent">
                    Medium
                  </option>
                  <option value={3} className="text-black bg-transparent">
                    Low
                  </option>
                </select>
                <small className="text-main-red">
                  {errors?.priority && errors.priority.message}
                </small>
              </FormField>
            </div>
            <div className="flex basis-9/12">
              <FormField title="Tags">
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
                <small className="text-main-red">
                  {errors?.tags && errors.tags.message}
                </small>
              </FormField>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <FormField title="Start Date">
              <input
                type="date"
                aria-label="Start date"
                {...register("start_at")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert text-sm lg:text-base"
              />
              <small className="text-main-red">
                {errors?.start_at && errors.start_at.message}
              </small>
            </FormField>
            <FormField title="End Date">
              <input
                type="date"
                aria-label="End date"
                {...register("end_at")}
                className="flex w-full bg-transparent outline-none font-medium text-black invert text-sm lg:text-base"
              />
              <small className="text-main-red">
                {errors?.end_at && errors.end_at.message}
              </small>
            </FormField>
          </div>
          <div className="flex flex-row gap-2">
            <FormField title="Project">
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
            </FormField>
            <FormField title="Stage">
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
            </FormField>
            <FormField title="Assigned">
              <Controller
                control={control}
                name="assigned_members"
                render={({ field }) => (
                  <Select
                    aria-label="Assigned"
                    isMulti={true}
                    value={defaultUser}
                    styles={SelectStyle}
                    options={userOptions}
                    isClearable={true}
                    components={{ DropdownIndicator: () => null }}
                    onChange={(option) => {
                      setDefaultUser(option);
                      return field.onChange(
                        option.map((option) => {
                          return option.value;
                        })
                      );
                    }}
                  ></Select>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.assigned_members && errors.end_at.message}
              </small>
            </FormField>
          </div>
          <div className="flex flex-row gap-2">
            <FormField title="Description">
              <textarea
                aria-label="Description"
                {...register("description")}
                rows={5}
                className="w-full bg-transparent text-white resize-none outline-none no-scrollbar text-sm lg:text-base"
              ></textarea>
              <small className="text-main-red">
                {errors?.description && errors.description.message}
              </small>
            </FormField>
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
