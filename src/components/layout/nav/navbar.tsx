"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/toggle-theme";
import { useAppSelector } from "@/lib/hooks";
import { AvatarMenu } from "./avatar-options";
import Logo from "./logo";
import SearchBar from "./search-bar";
import UserAvatar from "./user-avatar";

const NavBar = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <nav className="py-3 md:py-4 px-2 md:px-3 bg-background flex justify-between items-center border-b rounded-md">
        <div className="flex gap-3">
          <Logo />
        </div>
        {isAuthenticated && (
          <SearchBar className="hidden md:block md:w-60 lg:w-96" />
        )}
        <div className="hidden md:flex gap-2 ">
          <ModeToggle />
          {isAuthenticated ? (
            <AvatarMenu>
              <UserAvatar className="w-9 h- rounded-full" />
            </AvatarMenu>
          ) : (
            <Button variant={"default"}>Sign In</Button>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
