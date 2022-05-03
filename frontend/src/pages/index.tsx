import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import {
  Backplate,
  LoginVisual,
  RegisterVisual,
  LoginForm,
  RegisterForm,
} from "components";

const Home: NextPage = () => {
  const [form, setForm] = React.useState("login");

  function handleFormSwitch() {
    setForm(form == "login" ? "register" : "login");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-bg-green flex flex-grow items-center p-4">
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

export default Home;
