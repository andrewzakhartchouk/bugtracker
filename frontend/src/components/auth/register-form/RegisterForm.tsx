import React from "react";
import { FormEvent } from "react";
import { useLoading } from "hooks";
import { RegisterEventTarget } from "utils";

export const RegisterForm = () => {
  const [loading, setLoading] = useLoading(false);

  const handleSubmit = async (event: FormEvent) => {
    // TODO: Sending to endpoint
    event.preventDefault();
    setLoading();

    // const target = event.target as typeof event.target & RegisterEventTarget;

    // const formData = {
    //   name: target.name.value,
    //   email: target.email.value,
    //   password: target.password.value,
    //   password_confirm: target.password_confirm.value,
    // };
    // const jsonData = JSON.stringify(formData);

    // const endpoint = "/api/register";
    // const data = {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: jsonData,
    // };

    // const res = await fetch(endpoint, data);
    // const result = await res.json();

    await new Promise((res) => setTimeout(res, 3000));
    setLoading();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-right mb-2 text-gray-600">
          Sign up
        </h1>
        <p className="text-right text-xs sm:text-sm text-gray-500">
          Welcome newcomer!
        </p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="First name"
        aria-label="First name"
        className="text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        aria-label="Email"
        className="text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        aria-label="Password"
        className="text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="password"
        name="password_confirm"
        placeholder="Confirm password"
        aria-label="Confirm password"
        className="text-xs md:text-sm appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <div>
        <button
          type="submit"
          className="flex-shrink-0 w-full bg-main-green drop-shadow-xl text-white text-xs md:text-lg py-2 mt-5 mb-2 rounded-xl text-center hover:bg-low-green transition"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </div>
    </form>
  );
};
