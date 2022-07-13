import { FormButtons, SelectStyle, FormField } from "components";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CompleteProject, User } from "utils";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import { UserServices } from "services";

interface Props {
  project: CompleteProject | null;
  cancel: Function;
  refreshProjects: Function;
}

export const ProjectForm = (props: Props) => {
  const projectsEndpoint: string = process.env.NEXT_PUBLIC_API + "projects/";
  const teamsEndpoint: string = process.env.NEXT_PUBLIC_API + "teams/";

  const [defaultLead, setDefaultLead] = useState<Array<Object> | null>([]);
  const [defaultMembers, setDefaultMembers] = useState<Array<Object> | null>(
    null
  );
  const [leadOptions, setLeadOptions] = useState<Array<Object>>([]);
  const [membersInput, setMembersInput] = useState("");
  const userServices = UserServices();

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Project name is required." },
  };

  function handleLeadChange(selected: any) {
    const membersToSplice = defaultMembers;
    membersToSplice?.forEach((member, index) => {
      if (selected.includes(member)) {
        membersToSplice.splice(index, 1);
      }
    });
    setDefaultMembers(membersToSplice);
    setDefaultLead(selected);
  }

  function handleMembersChange(selected: Array<Object>) {
    setDefaultMembers(selected);
    setLeadOptions(selected);
  }

  function handleMembersInputChange(value: any) {
    setMembersInput(value);
  }

  const loadMembersOptions = async (
    inputValue: string,
    callback: (arg0: any) => void
  ): Promise<any> => {
    const team = await userServices.get(
      teamsEndpoint + `${props.project?.team.id}/`
    );
    const object = team.members;

    const toRemove = props?.project?.members.filter((user) => {
      return user.project_lead === true;
    });
    const filtered = object.filter((o: User) => !toRemove?.includes(o));
    callback(
      filtered.map((user: User) => ({
        label: `${user.name}`,
        value: user.id,
      }))
    );
  };

  async function onSubmit(data: any) {
    const formData = { ...data };
    console.log(formData);
    if (props.project) {
      try {
        const res = await userServices.put(
          projectsEndpoint + `${props.project.id}/update/`,
          formData
        );
        props.refreshProjects();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await userServices.post(projectsEndpoint, formData);
        props.refreshProjects();
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    if (props.project) {
      const lead = props.project.members.filter((user) => {
        return user.project_lead === true;
      });
      const members = props.project.members.filter((user) => {
        return user.project_lead !== true;
      });

      reset({
        name: props.project.name,
        project_lead: lead.map((user) => {
          return user.id;
        }),
        members: members.map((user) => {
          return user.id;
        }),
      });

      const leadOptions = lead.map((user) => {
        return { label: user.name, value: user.id };
      });
      const membersOptions = members.map((user) => {
        return { label: user.name, value: user.id };
      });
      setLeadOptions(membersOptions);
      setDefaultLead(leadOptions);
      setDefaultMembers(membersOptions);
    } else {
      reset({
        name: null,
        project_lead: [],
        members: [],
      });
    }
  }, [props.project, reset]);

  return (
    <>
      <form className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex flex-row gap-2">
            <FormField title="Project">
              <input
                type="text"
                {...register("name", formValidation.name)}
                aria-label="Project"
                className="text-lg font-medium text-white bg-transparent border-0 outline-none w-flex break-normal w-full lg:text-2xl"
              />
              <small className="text-main-red">
                {errors?.name && errors.name.message}
              </small>
            </FormField>
          </div>
          <div className="flex flex-row gap-2">
            <FormField title="Project Lead">
              <Controller
                control={control}
                {...register("project_lead")}
                ref={null}
                render={({ field }) => (
                  <Select
                    isMulti={true}
                    aria-label="Lead"
                    value={defaultLead}
                    styles={SelectStyle}
                    options={leadOptions}
                    components={{ DropdownIndicator: () => null }}
                    onChange={(option) => {
                      handleLeadChange(option);
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
                {errors?.lead && errors.project_lead.message}
              </small>
            </FormField>
            <FormField title="Members">
              <Controller
                control={control}
                {...register("members")}
                ref={null}
                render={({ field }) => (
                  <AsyncSelect
                    isMulti={true}
                    aria-label="Members"
                    value={defaultMembers}
                    cacheOptions={true}
                    styles={SelectStyle}
                    isClearable={true}
                    components={{ DropdownIndicator: () => null }}
                    loadOptions={loadMembersOptions}
                    onInputChange={handleMembersInputChange}
                    onChange={(option) => {
                      handleMembersChange(option);
                      return field.onChange(
                        option.map((option) => {
                          return option.value;
                        })
                      );
                    }}
                  ></AsyncSelect>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.lead && errors.members.message}
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
