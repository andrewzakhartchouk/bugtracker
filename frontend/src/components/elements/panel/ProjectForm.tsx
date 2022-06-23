import { FormButtons } from "components";
import { useForm } from "react-hook-form";
import { CompleteProject } from "utils";

interface Props {
  project: CompleteProject | null;
  cancel: Function;
}

export const ProjectForm = (props: Props) => {
  const projectsEndpoint: string = "/api/projects/";

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const formValidation = {
    name: { required: "Project name is required." },
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

  return (
    <>
      <form className="flex w-full bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40"></form>
      <div className="flex h-full items-center relative">
        <FormButtons
          confirm={handleSubmit(onSubmit)}
          cancel={props.cancel}
        ></FormButtons>
      </div>
    </>
  );
};
