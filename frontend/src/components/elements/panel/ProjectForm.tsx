import { FormButtons, SelectStyle, FormField } from "components";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CompleteProject, User } from "utils";
import AsyncSelect from "react-select/async";
import Select from "react-select";

interface Props {
  project: CompleteProject | null;
  cancel: Function;
}

export const ProjectForm = (props: Props) => {
  const projectsEndpoint: string = "/api/projects/";
  const usersEndpoint: string = "/api/users/list";

  const [defaultLead, setDefaultLead] = useState<Array<Object> | null>([]);
  const [defaultMembers, setDefaultMembers] = useState<Array<Object> | null>(
    null
  );
  const [leadOptions, setLeadOptions] = useState<Array<Object>>([]);
  const [membersInput, setMembersInput] = useState("");

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
    const response = await fetch(usersEndpoint);
    const json = await response.json();
    const object = json.users;

    const toRemove = props?.project?.members.filter((user) => {
      return user.lead === true;
    });
    const filtered = object.filter((o) => !toRemove?.includes(o));
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
      const res = await fetch(projectsEndpoint, {
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
      const res = await fetch(projectsEndpoint, {
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

  useEffect(() => {
    if (props.project) {
      reset({
        name: props.project.name,
      });
      let lead = props.project.members
        .filter((user) => {
          return user.lead === true;
        })
        .map((user) => {
          return { label: user.name, value: user.id };
        });
      let members = props.project.members
        .filter((user) => {
          return user.lead !== true;
        })
        .map((user) => {
          return { label: user.name, value: user.id };
        });
      setLeadOptions(members);
      setDefaultLead(lead);
      setDefaultMembers(members);
    } else {
      reset({
        name: null,
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
                {...register("lead")}
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
                      return field.onChange(option?.value);
                    }}
                  ></Select>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.lead && errors.lead.message}
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
                      return field.onChange(option?.value);
                    }}
                  ></AsyncSelect>
                )}
              ></Controller>
              <small className="text-main-red">
                {errors?.lead && errors.lead.message}
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
