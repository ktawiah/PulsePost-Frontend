import { cn } from "@/lib/utils";
import { ImSpinner2 } from "react-icons/im";

interface SpinnerProps {
  className?: string;
}

const Spinner = (props: SpinnerProps) => {
  return (
    <ImSpinner2
      className={cn("animate-spin text-primary-foreground", props.className)}
    />
  );
};

export default Spinner;
