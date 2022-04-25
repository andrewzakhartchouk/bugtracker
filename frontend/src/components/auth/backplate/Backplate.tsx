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
    <div className="drop-shadow-4xl container">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 w-3/4 xl:w-3/6 mx-auto">
        <div className="bg-panel-green p-10 rounded-bl-3xl">
          <ul className="flex flex-row space-x-3 mb-5">
            <li>
              <button
                className={`block text-md ${
                  currentForm == "login"
                    ? "text-main-green font-bold cursor-auto"
                    : "font-normal text-slate-400"
                }`}
                onClick={currentForm != "login" ? toggle : undefined}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className={`block text-md ${
                  currentForm == "register"
                    ? "text-main-green font-bold cursor-default"
                    : "font-normal text-gray-400 hover:text-high-green "
                }`}
                onClick={currentForm != "register" ? toggle : undefined}
              >
                Register
              </button>
            </li>
          </ul>

          <>{left}</>

          <div className="w-full flex justify-center mt-2 text-gray-500">
            or&nbsp;
            <a
              href=""
              className="text-main-green hover:underline underline-offset-2"
            >
              Sign in as a Guest
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-high-green to-low-green p-4 rounded-tr-3xl flex justify-center">
          <>{right}</>
        </div>
      </div>
      <MainTitle></MainTitle>
    </div>
  );
};
