import type { NextPage } from "next";
import React, { useState } from "react";
import {
  Backplate,
  LoginVisual,
  RegisterVisual,
  LoginForm,
  RegisterForm,
} from "components";

const Login: NextPage = () => {
  const [form, setForm] = useState("login");

  function handleFormSwitch() {
    setForm(form == "login" ? "register" : "login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow items-center">
        <Backplate
          toggle={handleFormSwitch}
          currentForm={form}
          left={form == "login" ? <LoginForm /> : <RegisterForm />}
          right={form == "login" ? <LoginVisual /> : <RegisterVisual />}
        />
      </div>
    </div>
  );
};

export default Login;
