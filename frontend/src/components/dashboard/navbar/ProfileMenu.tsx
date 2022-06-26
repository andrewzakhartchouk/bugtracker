import { UserIcon, CogIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Url } from "url";
import { TabObject } from "utils";

interface Props {
  show: boolean;
}

export const ProfileMenu = (props: Props) => {
  const { show } = props;

  const links: Array<TabObject> = [
    // {
    //   name: "Profile",
    //   icon: <UserIcon className="h-5 w-5 my-auto"></UserIcon>,
    //   page: "/dashboard" as unknown as Url,
    // },
    // {
    //   name: "Settings",
    //   icon: <CogIcon className="h-5 w-5 my-auto"></CogIcon>,
    //   page: "/dashboard" as unknown as Url,
    // },
    {
      name: "Sign out",
      icon: <LogoutIcon className="h-5 w-5 my-auto"></LogoutIcon>,
      page: "/login" as unknown as Url,
    },
  ];

  return (
    <>
      <div
        className={`absolute top-12 right-5 bg-nav-green rounded-br-3xl rounded-tl-3xl p-4 ${
          show ? "visible" : "invisible"
        }`}
      >
        <ul className="text-white font-thin tracking-wide mx-3">
          {links.map((object, index) => {
            return (
              <li
                className="flex whitespace-nowrap my-1 hover:text-high-green cursor-pointer last:pt-1 last:mt-2 last:border-t last:border-t-white"
                key={index}
              >
                {object.icon}
                <Link href={object.page}>
                  <a className="ml-2">{object.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
