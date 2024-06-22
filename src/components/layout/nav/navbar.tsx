"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { useAppSelector } from "@/lib/hooks";
import { FaCaretDown } from "react-icons/fa";
import { HamburgerMenu } from "./hamburger-options";
import Logo from "./logo";
import NavPages from "./nav-pages";
import UserAvatar from "./user-avatar";

export const NavBar = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <header className="w-full">
      <div className="w-full flex justify-between items-center h-16 mx-auto">
        <Logo />
        {isAuthenticated && (
          <NavPages>
            <Button
              variant={"outline"}
              className="gap-3 px-6 hidden lg:flex cursor-pointer"
            >
              <p>Go to</p>
              <FaCaretDown />
            </Button>
          </NavPages>
        )}
        <div className="flex items-center md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Button
                type="submit"
                title="Search"
                className="p-1 text-gray-500 border-none h-8 w-8"
                variant={"link"}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 "
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </Button>
            </span>
            <Input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto "
            />
          </div>
          <Button
            type="button"
            className="hidden px-6 py-2 font-semibold rounded lg:block"
            variant={"default"}
          >
            Log in
          </Button>
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
          <HamburgerMenu>
            <Button variant={"ghost"} size={"icon"} className="rounded-full">
              <UserAvatar />
            </Button>
          </HamburgerMenu>
        </div>
        <HamburgerMenu>
          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </HamburgerMenu>
      </div>
    </header>
  );
};
