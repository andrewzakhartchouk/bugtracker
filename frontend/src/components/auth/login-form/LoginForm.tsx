import { useLoading } from "hooks";
import React, { FormEvent } from "react";
import { LoginEventTarget } from "utils";

export const LoginForm = () => {
  const [loading, setLoading] = useLoading(false);

  const handleLogin = async (event: FormEvent) => {
    // TODO: Sending to endpoint
    event.preventDefault();
    setLoading();

    console.log("HANDLE LOGIN");

    // const target = event.target as typeof event.target & LoginEventTarget;

    // const formData = {
    //   email: target.email.value,
    //   password: target.password.value,
    // };
    // const jsonData = JSON.stringify(formData);

    // const endpoint = "/api/login";
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
    console.log("HANDLING DONE");
    // console.log(result);
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-right mb-2 text-gray-600">
          Sign in
        </h1>
        <p className="text-right text-xs sm:text-sm text-gray-600">
          Please log in as a <span className="text-main-green">user</span> or{" "}
          <span className="text-main-green">guest</span> to continue.
        </p>
      </div>
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
      <div>
        <button
          type="submit"
          className="flex-shrink-0 w-full bg-main-green drop-shadow-xl text-white text-xs md:text-lg py-2 mt-5 mb-2 rounded-xl text-center hover:bg-low-green transition"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </div>
    </form>
  );
};
