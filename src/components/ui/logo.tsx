import { MdConnectWithoutContact } from "react-icons/md";
import { Abril_Fatface } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const logoFont = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center text-primary">
      <MdConnectWithoutContact size={"32"} />
      <span
        className={cn(
          logoFont.className,
          "font-bold text-base lg:text-2xl italic"
        )}
      >
        PulsePost
      </span>
    </Link>
  );
};

export default Logo;
