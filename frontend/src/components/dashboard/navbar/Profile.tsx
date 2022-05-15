import { useLoading } from "hooks";
import { ProfileMenu } from "./ProfileMenu";
import { useClickOutside } from "hooks";

export const Profile = () => {
  interface User {
    name: String;
  }

  const user: User = {
    name: "Andrewaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  };

  const [toggle, setToggle] = useLoading(false);

  const menuRef = useClickOutside(() => setToggle(false));

  return (
    <>
      <div
        ref={menuRef}
        className={`my-auto min-w-0 flex text-sm text-white truncate hover:text-high-green hover:underline underline-offset-2 cursor-pointer ${
          toggle ? "underline" : ""
        }`}
        onClick={() => setToggle()}
      >
        {user.name}
      </div>
      <div className="flex-none block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
      <ProfileMenu show={toggle}></ProfileMenu>
    </>
  );
};
