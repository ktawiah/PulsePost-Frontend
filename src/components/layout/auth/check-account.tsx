import { cn } from "@/lib/utils";
import Link from "next/link";

interface CheckAccountStatusProps {
  className?: string;
  type: "login" | "reset" | "register";
}

const CheckAccountStatus = (props: CheckAccountStatusProps) => {
  return (
    <>
      {props.type === "register" ? (
        <div className={cn(props.className, "text-xs")}>
          <span>Already have an account? </span>
          <Link
            href={"/login"}
            className="text-primary font-bold cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      ) : props.type === "login" ? (
        <div className={cn(props.className, "text-xs")}>
          <span>Don&apos;t have an account? </span>
          <Link
            href={"/register"}
            className="text-primary font-bold cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <div className={cn(props.className, "text-xs")}>
          <span>Want to login? </span>
          <Link
            href={"/login"}
            className="text-primary font-bold cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckAccountStatus;
