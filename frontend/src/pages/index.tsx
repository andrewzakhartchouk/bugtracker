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
  const [showForm, switchForm] = React.useState("login");

  function handleFormSwitch() {
    switchForm(showForm == "login" ? "register" : "login");
  }

  return (
    <div className="bg-bg-green">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Backplate
          toggle={handleFormSwitch}
          currentForm={showForm}
          left={showForm == "login" ? <LoginForm /> : <RegisterForm />}
          right={showForm == "login" ? <LoginVisual /> : <RegisterVisual />}
        />
      </div>
    </div>
  );
};

export default Home;
