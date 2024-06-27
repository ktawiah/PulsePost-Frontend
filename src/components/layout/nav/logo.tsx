import { cn } from "@/lib/utils";
import { Calistoga } from "next/font/google";
import Link from "next/link";
import { MdConnectWithoutContact, MdOutlineCompost } from "react-icons/md";

const logoFont = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex gap-0 md:gap-1 lg:gap-2 items-center text-primary"
    >
      <MdOutlineCompost className="md:w-5 lg:w-6 h-auto" />
      <span
        className={cn(
          logoFont.className,
          "font-extrabold text-base lg:text-xl italic"
        )}
      >
        PULSEPOST
      </span>
    </Link>
  );
};

export default Logo;
