import { setAuthType } from "@/lib/features/auth-slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";

interface CheckAccountStatusProps {
  className?: string;
}

const CheckAccountStatus = (props: CheckAccountStatusProps) => {
  const formState = useAppSelector<RootState>((state) => state.auth.authType);
  const dispatch = useAppDispatch();
  return (
    <>
      {formState == "register" ? (
        <p className={cn(props.className, "text-xs")}>
          <span>Already have an account? </span>
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => dispatch(setAuthType("login"))}
          >
            Sign In.
          </span>
        </p>
      ) : formState == "login" ? (
        <p className={cn(props.className, "text-xs")}>
          <span>Don&apos;t have an account? </span>
          <span
            className="text-primary text-sm font-bold cursor-pointer"
            onClick={() => dispatch(setAuthType("register"))}
          >
            Sign Up.
          </span>
        </p>
      ) : (
        <p className={cn(props.className, "text-xs")}>
          <span>Want to login? </span>
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => dispatch(setAuthType("login"))}
          >
            Click here.
          </span>
        </p>
      )}
    </>
  );
};

export default CheckAccountStatus;
