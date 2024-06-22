import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ReactNode } from "react";

interface NavPagesProps {
  children: ReactNode;
}

type Pages = {
  name: string;
  link: string;
}[];

const pages: Pages = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

const NavPages = (props: NavPagesProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {pages.map((page) => {
          return (
            <Link href={page.link} key={page.name}>
              <DropdownMenuItem className="cursor-pointer">
                {page.name}
              </DropdownMenuItem>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavPages;
