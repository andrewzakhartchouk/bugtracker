import { Logo } from "./Logo";
import {
  HomeIcon,
  ChevronDoubleRightIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { ClipboardListIcon } from "@heroicons/react/outline";
import { Profile } from "./Profile";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavTab } from "utils";

export const Navbar = () => {
  const router = useRouter();

  const links: Array<NavTab> = [
    {
      name: "Home",
      icon: <HomeIcon className="h-4 w-4 my-auto"></HomeIcon>,
      link: "/dashboard",
    },
    {
      name: "Tasks",
      icon: <ClipboardListIcon className="h-4 w-4 my-auto"></ClipboardListIcon>,
      link: "/tasks",
    },
    {
      name: "Projects",
      icon: (
        <ChevronDoubleRightIcon className="h-4 w-4 my-auto"></ChevronDoubleRightIcon>
      ),
      link: "/projects",
    },
  ];

  return (
    <nav className="bg-nav-green p-3">
      <div className="flex justify-between">
        <Logo></Logo>
        <div className="w-full justify-between relative hidden sm:flex">
          <ul className="hidden sm:flex w-full ml-6 md:ml-12">
            {links.map((object, index) => {
              return (
                <Link href={object.link} key={index}>
                  <a
                    className={`flex my-auto mx-2 md:mx-4 text-sm font-semibold text-white tracking-wider hover:text-high-green cursor-pointer ${
                      router.pathname == object.link
                        ? "underline underline-offset-2"
                        : ""
                    }`}
                  >
                    {object.icon}
                    <p className="mx-1">{object.name}</p>
                  </a>
                </Link>
              );
            })}
          </ul>
          <Profile></Profile>
        </div>
        <div className="flex my-auto sm:hidden">
          <MenuIcon className="h-6 w-6 text-white"></MenuIcon>
        </div>
      </div>
    </nav>
  );
};
