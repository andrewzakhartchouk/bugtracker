import { Logo } from "./Logo";
import {
  HomeIcon,
  ChevronDoubleRightIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { CalendarIcon, ClipboardListIcon } from "@heroicons/react/outline";
import { Profile } from "./Profile";

interface TabObject {
  name: String;
  icon: JSX.Element;
}

export const Navbar = () => {
  const links: Array<TabObject> = [
    {
      name: "Home",
      icon: <HomeIcon className="h-4 w-4 my-auto"></HomeIcon>,
    },
    {
      name: "Tasks",
      icon: <ClipboardListIcon className="h-4 w-4 my-auto"></ClipboardListIcon>,
    },
    {
      name: "Projects",
      icon: (
        <ChevronDoubleRightIcon className="h-4 w-4 my-auto"></ChevronDoubleRightIcon>
      ),
    },
    {
      name: "Calendar",
      icon: <CalendarIcon className="h-4 w-4 my-auto"></CalendarIcon>,
    },
  ];

  return (
    <nav className="bg-nav-green p-3 flex justify-between">
      <Logo></Logo>
      <div className="w-full justify-between relative hidden sm:flex">
        <ul className="hidden sm:flex w-full">
          {links.map((object, index) => {
            return (
              <li
                className="flex my-auto mx-2 md:mx-4 text-sm font-semibold text-white tracking-wider hover:text-high-green cursor-pointer"
                key={index}
              >
                {object.icon}
                <p className="mx-1">{object.name}</p>
              </li>
            );
          })}
        </ul>
        <Profile></Profile>
      </div>
      <div className="flex my-auto sm:hidden">
        <MenuIcon className="h-6 w-6 text-white"></MenuIcon>
      </div>
    </nav>
  );
};
