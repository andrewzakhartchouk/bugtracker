import { useForm } from "react-hook-form";
import { CompleteProject } from "utils";

interface Props {
  task: CompleteProject | null;
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

  return (
    <div className="flex w-full justify-center bg-black p-10 rounded-tr-3xl rounded-bl-3xl bg-opacity-40">
      <div></div>
    </div>
  );
};
