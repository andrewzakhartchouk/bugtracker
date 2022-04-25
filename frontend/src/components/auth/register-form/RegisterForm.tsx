import { FormEvent, FormEventHandler } from "react";

export const RegisterForm = () => {
  const handleSubmit = async (event: FormEvent) => {
    // TODO: Sending to endpoint
    event.preventDefault();
    console.log("HANDLE REGISTER");

    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
      password_confirm: { value: string };
    };

    const formData = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      password_confirm: target.password_confirm.value,
    };
    const jsonData = JSON.stringify(formData);

    const endpoint = "/api/register";
    const data = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: jsonData,
    };

    const res = await fetch(endpoint, data);
    const result = await res.json();

    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
      <div>
        <h1 className="text-4xl font-medium text-right mb-2 text-gray-600">
          Sign up
        </h1>
        <p className="text-right text-sm text-gray-500">Welcome newcomer!</p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="First name"
        aria-label="First name"
        className="appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        aria-label="Email"
        className="appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        aria-label="Password"
        className="appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <input
        type="password"
        name="password_confirm"
        placeholder="Confirm password"
        aria-label="Confirm password"
        className="appearance-none bg-transparent border-b border-gray-400 w-full focus:outline-none px-2 py-1 my-2"
      />
      <div>
        <button
          type="submit"
          className="flex-shrink-0 w-full bg-main-green drop-shadow-xl text-white py-2 mt-5 mb-2 rounded-xl text-center hover:bg-low-green transition"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};
