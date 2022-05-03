import { NextPage } from "next";
import { MainTitle } from "./MainTitle";

interface Props {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
  currentForm: string;
  left: JSX.Element;
  right: JSX.Element;
}

export const Backplate: NextPage<Props> = (props) => {
  const { toggle, currentForm, left, right } = props;

  return (
    <div className="drop-shadow-4xl mx-auto w-96 md:w-5/6">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-5/6 xl:w-3/6 mx-auto">
        <div className="bg-panel-green p-10 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none w-full">
          <ul className="flex flex-row space-x-3 mb-5 text-sm md:text-base">
            <li>
              <button
                className={`block text-md focus:outline-none focus-within:outline-none focus-visible:outline-none ${
                  currentForm == "login"
                    ? "text-main-green font-bold cursor-auto"
                    : "font-normal text-gray-400 hover:text-high-green"
                }`}
                onClick={currentForm != "login" ? toggle : undefined}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className={`block text-md focus:outline-none focus-within:outline-none focus-visible:outline-none ${
                  currentForm == "register"
                    ? "text-main-green font-bold cursor-default"
                    : "font-normal text-gray-400 hover:text-high-green"
                }`}
                onClick={currentForm != "register" ? toggle : undefined}
              >
                Register
              </button>
            </li>
          </ul>

          <>{left}</>

          <div className="w-full flex flex-col md:flex-row text-center md:text-justify justify-center mt-2 text-xs md:text-base text-gray-500">
            <a
              href=""
              className="text-main-green hover:underline underline-offset-2"
            >
              Sign in as a Guest
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-high-green to-low-green hidden md:p-6 p-10 rounded-tr-3xl md:flex justify-center">
          <>{right}</>
        </div>
      </div>
      <MainTitle></MainTitle>
    </div>
  );
};
