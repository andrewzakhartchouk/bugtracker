import { useLoading } from "hooks";
import { ProfileMenu } from "./ProfileMenu";

// TODO: Close menu when clicking outside

export const Profile = () => {
  interface User {
    name: String;
  }

  const user: User = {
    name: "Andrew",
  };

  const [toggle, setToggle] = useLoading(false);

  return (
    <div className="flex relative select-none" onClick={() => setToggle()}>
      <div className="flex my-auto">
        <div
          className={`text-white hover:text-high-green hover:underline underline-offset-2 cursor-pointer ${
            toggle ? "underline" : ""
          }`}
        >
          {user.name}
        </div>
        <div className="rounded-full bg-white p-3 mx-3"></div>
      </div>

      <ProfileMenu show={toggle}></ProfileMenu>
    </div>
  );
};
