import { useLoading } from "hooks";
import React from "react";
import { useForm } from "react-hook-form";
import { GreenScalingDots } from "components/elements";
import { UserServices } from "services";

export const LoginForm = () => {
  const [loading, setLoading] = useLoading(false);
  const userServices = UserServices();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const formValidation = {
    email: {
      required: "Email is required.",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Invalid email address",
      },
    },
    password: { required: "Password is required." },
  };

  const handleLogin = async (data: any) => {
    setLoading();
    const formData = { ...data };
    try {
      await userServices.login(formData);
    } catch (error) {
      console.log(error);
      setError("password", { type: "manual", message: error });
    }

    setLoading();
  };

  return (
    <>
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-right mb-2 text-gray-600">
          Sign in
        </h1>
        <p className="text-right text-xs sm:text-sm text-gray-600">
          Please log in as a <span className="text-main-green">user</span> or{" "}
          <span className="text-main-green">guest</span> to continue.
        </p>
      </div>
      <form className="flex flex-col my-5">
        <div className="flex flex-col gap-4">
          <div>
            <input
              {...register("email", formValidation.email)}
              type="text"
              name="email"
              placeholder="Email"
              aria-label="Email"
              className="text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 mt-2"
            />
            <small className="text-main-red text-xs lg:text-sm px-2">
              {errors?.email && errors.email.message}
            </small>
          </div>
          <div>
            <input
              {...register("password", formValidation.password)}
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              className="relative text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 mt-2"
            />
            <small className="text-main-red text-xs lg:text-sm px-2">
              {/* {errors?.password && errors.password.message} */}
            </small>
          </div>
        </div>
        <div className="flex w-full mt-10">
          {loading ? (
            <GreenScalingDots></GreenScalingDots>
          ) : (
            <button
              onClick={handleSubmit(handleLogin)}
              className="w-full bg-main-green drop-shadow-xl text-white text-xs md:text-lg py-2 rounded-xl text-center hover:bg-low-green transition"
            >
              Sign in
            </button>
          )}
        </div>
      </form>
    </>
  );
};
