import { cn } from "@/lib/utils";
import { Calistoga } from "next/font/google";
import Link from "next/link";
import { MdConnectWithoutContact } from "react-icons/md";

const logoFont = Calistoga({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center text-primary">
      <MdConnectWithoutContact size={40} className="scale-x-125" />
      <span
        className={cn(
          logoFont.className,
          "font-extrabold text-base lg:text-2xl italic"
        )}
      >
        PULSEPOST
      </span>
    </Link>
  );
};

export default Logo;
