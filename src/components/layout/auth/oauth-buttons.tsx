import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const OAuthButtons = () => {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row lg:gap-4">
      <Button className="w-full flex gap-2" variant={"secondary"} type="button">
        <FcGoogle size={"28"} />
        <p className="text-primary">Sign in with Google</p>
      </Button>
      <Button className="w-full flex gap-2" variant={"secondary"} type="button">
        <FaGithub size={"28"} />
        <p className="text-primary">Sign in with Github</p>
      </Button>
    </div>
  );
};

export default OAuthButtons;
