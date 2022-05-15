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
      <div className="relative select-none hidden sm:flex" ref={menuRef}>
        <div
          className={`min-w-0 flex flex-1 cursor-pointer ${
            toggle ? "underline" : ""
          }`}
          onClick={() => setToggle()}
        >
          <p className=" w-24 md:w-40 lg:w-full overflow-hidden my-auto text-sm text-white hover:text-high-green hover:underline underline-offset-2 ">
            {user.name}
          </p>
        </div>
        <div className="block whitespace-nowrap rounded-full my-auto bg-white p-3 mx-2"></div>
      </div>
      <ProfileMenu show={toggle}></ProfileMenu>
    </>
  );
};
